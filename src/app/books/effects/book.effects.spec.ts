import {TestBed} from '@angular/core/testing';
import {Actions} from '@ngrx/effects';
import {cold, hot, getTestScheduler} from 'jasmine-marbles';
import {empty} from 'rxjs/observable/empty';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/zip';
import {Book} from '../models/book';
import {BookEffects, SEARCH_DEBOUNCE, SEARCH_SCHEDULER} from "./book.effects";
import {BooksService} from "../books.service";
import {SearchAction, SearchCompleteAction} from "../actions/book-search.actions";

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

describe('BookEffects', () => {
  let effects: BookEffects;
  let googleBooksService: any;
  let actions: TestActions;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookEffects,
        {
          provide: BooksService,
          useValue: jasmine.createSpyObj('GoogleBookBooksServicesService', ['searchBooks']),
        },
        {provide: Actions, useFactory: getActions},
        {provide: SEARCH_SCHEDULER, useFactory: getTestScheduler},
        {provide: SEARCH_DEBOUNCE, useValue: 30},
      ],
    });

    effects = TestBed.get(BookEffects);
    googleBooksService = TestBed.get(BooksService);
    actions = TestBed.get(Actions);
  });

  describe('search', () => {
    it('should return a new book.SearchCompleteAction, with the books, on success, after the de-bounce', () => {
      const book1 = {id: '111', volumeInfo: {}} as Book;
      const book2 = {id: '222', volumeInfo: {}} as Book;
      const books = [book1, book2];
      const action = new SearchAction('query');
      const completion = new SearchCompleteAction(books);

      actions.stream = hot('-a---', {a: action});
      const response = cold('-a|', {a: books});
      const expected = cold('-----b', {b: completion});
      googleBooksService.searchBooks.and.returnValue(response);

      expect(effects.search).toBeObservable(expected);
    });

    it('should return a new book.SearchCompleteAction, with an empty array, if the books service throws', () => {
      const action = new SearchAction('query');
      const completion = new SearchCompleteAction([]);
      const error = 'Error!';

      actions.stream = hot('-a---', {a: action});
      const response = cold('-#|', {}, error);
      const expected = cold('-----b', {b: completion});
      googleBooksService.searchBooks.and.returnValue(response);

      expect(effects.search).toBeObservable(expected);
    });

    it(`should not do anything if the query is an empty string`, () => {
      const action = new SearchAction('');

      actions.stream = hot('-a---', {a: action});
      const expected = cold('---');

      expect(effects.search).toBeObservable(expected);
    });

    it(`should return`, () => {
      let values = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        x: 1 + 3, // a + c
        y: 2 + 4, // b + d
      };

      let e1 = cold('---a---b-----|', values);
      let e2 = cold('-----c---d---|', values);
      let ex = cold('-----x---y---|', values);

       expect(e1.zip(e2, (x, y) => x + y)).toBeObservable(ex);
    });
  });
});

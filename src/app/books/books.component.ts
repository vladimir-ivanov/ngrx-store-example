import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {Store} from "@ngrx/store";
import {SearchAction} from "./actions/book-search.actions";
import * as fromBooks from "./reducers/index";
import {Book} from "./models/book";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-books',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: Observable<Book[]>;

  constructor(private store: Store<fromBooks.State>) {
    this.books = store.select(fromBooks.getBooksListEntities);
  }

  ngOnInit(): void {
  }

  search(query: string) {
    this.store.dispatch(new SearchAction(query));
  }
}

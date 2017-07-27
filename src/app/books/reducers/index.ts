import {createSelector, createFeatureSelector} from '@ngrx/store';
import * as fromSearch from './book-search.reducer';
import * as fromBooksList from './books-list.reducer';
import * as fromRoot from '../../reducers';

export interface BooksState {
  search: fromSearch.State;
  booksList: fromBooksList.State
}

export interface State extends fromRoot.State {
  book: BooksState;
}

export const reducers = {
  search: fromSearch.reducer,
  booksList: fromBooksList.reducer
};

export const getBooksState = createFeatureSelector<BooksState>('books');

export const getSearchState = createSelector(
  getBooksState,
  (state: BooksState) => state.search
);
export const getBooksListState = createSelector(
  getBooksState,
  (state: BooksState) => state.booksList
);

export const getSearchBookIds = createSelector(
  getSearchState,
  fromSearch.getIds
);
export const getSearchQuery = createSelector(
  getSearchState,
  fromSearch.getQuery
);
export const getSearchLoading = createSelector(
  getSearchState,
  fromSearch.getLoading
);
export const getBooksListEntities = createSelector(
  getBooksListState,
  fromBooksList.getEntities
);

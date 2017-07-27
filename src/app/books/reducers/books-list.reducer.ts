import {createSelector} from '@ngrx/store';
import {Book} from '../models/book';
import {BOOK} from "../actions/book-search.actions";

export interface State {
  ids: string[];
  entities: Book[];
  selectedBookId: string | null;
}

export const initialState: State = {
  ids: [],
  entities: [],
  selectedBookId: null,
};

export function reducer(state = initialState,
                        action: any): State {
  switch (action.type) {
    case BOOK.SEARCH_COMPLETE: {
      const books = action.payload;
      const newBooks = books.filter(book => !state.entities[book.id]);

      const newBookIds = newBooks.map(book => book.id);
      const newBookEntities = newBooks.reduce(
        (entities: Book[], book: Book) => {
          return [...entities, book];
        },
        []
      );

      return {
        ids: [...state.ids, ...newBookIds],
        entities: [...newBookEntities],
        selectedBookId: state.selectedBookId,
      };
    }

    default: {
      return state;
    }
  }
}

export const getEntities = (state: State) => state.entities;
export const getIds = (state: State) => state.ids;

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});

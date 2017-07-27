import {Actions, BOOK} from "../actions/book-search.actions";

export interface State {
  ids: string[];
  loading: boolean;
  query: string;
}

const initialState: State = {
  ids: [],
  loading: false,
  query: '',
};

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case BOOK.SEARCH: {
      const query = action.payload;

      if (query === '') {
        return {
          ids: [],
          loading: false,
          query,
        };
      }

      return Object.assign({}, state, {
        query,
        loading: true,
      });
    }

    case BOOK.SEARCH_COMPLETE: {
      const books = action.payload;

      return {
        ids: books.map(book => book.id),
        loading: false,
        query: state.query,
      };
    }

    default: {
      return state;
    }
  }
}

export const getIds = (state: State) => state.ids;
export const getQuery = (state: State) => state.query;
export const getLoading = (state: State) => state.loading;

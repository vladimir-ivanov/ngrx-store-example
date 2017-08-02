import {APP_ERROR} from "../errror-overlay.actions";

export interface State {
  errorMessage: string;
}

export const initialState: State = {
  errorMessage: ''
};

export function reducer(state = initialState,
                        action: any): State {
  switch (action.type) {
    case APP_ERROR: {
      return {
        errorMessage: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

export const getErrorMessage = (state: State) => state.errorMessage;

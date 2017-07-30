import {HTTP_REQUESTS} from "../http-request.actions";

export interface State {
  hasActiveRequests: boolean;
}

export const initialState: State = {
  hasActiveRequests: false
};

export function reducer(state = initialState,
                        action: any): State {
  switch (action.type) {
    case HTTP_REQUESTS.LOADING: {
      return {
        hasActiveRequests: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

export const getHasActiveRequests = (state: State) => state.hasActiveRequests;

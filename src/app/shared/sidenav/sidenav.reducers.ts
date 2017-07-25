import {Actions, SIDENAV} from "./sidenav.actions";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export interface State {
  sidenavOpened: boolean;
}

const initialState: State = {
  sidenavOpened: false
};

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case SIDENAV.CLOSE:
      return {
        sidenavOpened: false,
      };

    case SIDENAV.OPEN:
      return {
        sidenavOpened: true,
      };

    default:
      return state;
  }
}

export const getSidenavOpened = createSelector(
  createFeatureSelector<State>('layout'),
  (state: State) => state.sidenavOpened
);

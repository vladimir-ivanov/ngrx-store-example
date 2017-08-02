import * as fromErrorOverlay from './error-overlay.reducer';
import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromRoot from '../../../reducers';
import {getErrorMessage} from "./error-overlay.reducer";

export interface AppErrorState extends fromRoot.State {
  appError: fromErrorOverlay.State
}

export const reducers = {
  appError: fromErrorOverlay.reducer
};

export const getAppErrorState = createFeatureSelector<AppErrorState>('appError');

export const getErrorMessageState = createSelector(
  createSelector(getAppErrorState, (state: AppErrorState) => state.appError),
  getErrorMessage
);

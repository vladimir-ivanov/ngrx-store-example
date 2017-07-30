import * as fromHttpRequest from './http-request.reducer';
import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromRoot from '../../../reducers';
import {getHasActiveRequests, State} from "./http-request.reducer";

export interface HttpRequestsActiveState extends fromRoot.State {
  requests: State;
}

export const reducers = {
  requests: fromHttpRequest.reducer
};

export const getHttpRequestsState = createFeatureSelector<HttpRequestsActiveState>('requests');

export const getHttpRequestsActiveState = createSelector(
  createSelector(getHttpRequestsState, (state: HttpRequestsActiveState) => state.requests),
  getHasActiveRequests
);

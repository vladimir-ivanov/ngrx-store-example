import * as fromHttpRequest from './http-request.reducer';
import {getHasActiveRequests} from './http-request.reducer';
import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromRoot from '../../../reducers';

export interface HttpRequestsActiveState extends fromRoot.State {
  requests: fromHttpRequest.State;
}

export const reducers = {
  requests: fromHttpRequest.reducer
};

export const getHttpRequestsState = createFeatureSelector<HttpRequestsActiveState>('requests');

export const getHttpRequestsActiveState = createSelector(
  createSelector(getHttpRequestsState, (state: HttpRequestsActiveState) => state.requests),
  getHasActiveRequests
);

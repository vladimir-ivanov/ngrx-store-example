import {Action} from '@ngrx/store';

export enum HTTP_REQUESTS {
  LOADING = "HTTP_REQUESTS_LOADING"
}

export class HttpRequestLoadingActions implements Action {
  readonly type = HTTP_REQUESTS.LOADING;

  constructor(public payload: boolean) {
  }
}

export type Actions =
  HttpRequestLoadingActions

import {Action} from '@ngrx/store';

export const APP_ERROR = 'APP_ERROR';

export class AppErrorActions implements Action {
  readonly type = APP_ERROR;

  constructor(public payload: string) {
  }
}

export type Actions =
  AppErrorActions

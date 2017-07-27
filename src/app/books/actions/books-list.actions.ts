import {Action} from '@ngrx/store';
import {Book} from '../models/book';

export enum BOOKS_LIST {
  LOAD = "BOOKS_LIST_LOAD",
  LOAD_SUCCESS = "BOOKS_LIST_LOAD_SUCCESS",
  LOAD_FAIL = "BOOKS_LIST_LOAD_FAIL"
}

export class LoadAction implements Action {
  readonly type = BOOKS_LIST.LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = BOOKS_LIST.LOAD_SUCCESS;

  constructor(public payload: Book[]) {
  }
}

export class LoadFailAction implements Action {
  readonly type = BOOKS_LIST.LOAD_FAIL;

  constructor(public payload: any) {
  }
}

export type Actions =
  LoadAction
  | LoadSuccessAction
  | LoadFailAction;

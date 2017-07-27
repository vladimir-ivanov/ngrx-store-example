import { Action } from '@ngrx/store';
import {Book} from "../models/book";

export enum BOOK {
  SEARCH = "BOOK_SEARCH",
  SEARCH_COMPLETE = "BOOK_SEARCH_COMPLETE"
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class SearchAction implements Action {
  readonly type = BOOK.SEARCH;

  constructor(public payload: string) {}
}

export class SearchCompleteAction implements Action {
  readonly type = BOOK.SEARCH_COMPLETE;

  constructor(public payload: Book[]) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions =
  | SearchAction
  | SearchCompleteAction;

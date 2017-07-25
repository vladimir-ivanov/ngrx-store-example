import {Action} from '@ngrx/store';

export enum SIDENAV {
  OPEN = "SIDENAV_OPEN",
  CLOSE = "SIDENAV_CLOSE"
}

export class OpenSidenavAction implements Action {
  readonly type = SIDENAV.OPEN;
}

export class CloseSidenavAction implements Action {
  readonly type = SIDENAV.CLOSE;
}

export type Actions = OpenSidenavAction | CloseSidenavAction;

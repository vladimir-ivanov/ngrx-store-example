import {Component} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import {getSidenavOpened} from "../sidenav/sidenav.reducers";
import {CloseSidenavAction, OpenSidenavAction} from "../sidenav/sidenav.actions";
import {State} from "../../reducers";

@Component({
  selector: 'app-page-sidenav',
  templateUrl: './page-sidenav.component.html',
  styleUrls: ['./page-sidenav.component.scss']
})
export class PageSidenavComponent {
  sidenavOpened: Observable<boolean>;

  constructor(private store: Store<State>) {
    /**
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */
    this.sidenavOpened = this.store.select(getSidenavOpened);
  }

  toggleSidenav(isOpened) {
    this.store.dispatch(isOpened ? new OpenSidenavAction() : new CloseSidenavAction());
  }
}

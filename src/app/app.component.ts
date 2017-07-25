import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import {CloseSidenavAction, OpenSidenavAction} from "./shared/sidenav/sidenav.actions";
import * as fromRoot from './reducers';
import {getSidenavOpened} from "./shared/sidenav/sidenav.reducers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  //sidenavOpened: boolean = false;
  sidenavOpened: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
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

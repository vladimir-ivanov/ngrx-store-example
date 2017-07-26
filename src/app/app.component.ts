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
}

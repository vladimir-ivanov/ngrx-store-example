import {ChangeDetectionStrategy, Component} from '@angular/core';
import {timer} from "rxjs/observable/timer";
import {of} from "rxjs/observable/of";
import 'rxjs/add/operator/mapTo';
import {Store} from "@ngrx/store";
import {MdDialog, MdDialogRef} from '@angular/material';
import * as fromHttpRequests from './shared/http-request/reducers/index';
import * as fromErrorOverlay from './shared/error-overlay/reducers/index';
import {ErrorOverlayComponent} from "./shared/error-overlay/error-overlay.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  showLoadingOverlay$;

  constructor(private store: Store<any>, private dialog: MdDialog) {
    this.showLoadingOverlay$ = store.select(fromHttpRequests.getHttpRequestsActiveState)
      .switchMap(show => show ? of(true) : timer(1000).mapTo(false));

    store.select(fromErrorOverlay.getAppErrorState).skip(1).subscribe(err => {
      const dialogRef: MdDialogRef<ErrorOverlayComponent> = this.dialog.open(ErrorOverlayComponent, {
        data: err.appError.errorMessage
      });
    });
  }
}

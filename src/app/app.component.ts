import {ChangeDetectionStrategy, Component} from '@angular/core';
import {timer} from "rxjs/observable/timer";
import {of} from "rxjs/observable/of";
import 'rxjs/add/operator/mapTo';
import {Store} from "@ngrx/store";
import * as fromHttpRequests from './shared/http-request/reducers/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  showLoadingOverlay$;

  constructor(private store: Store<fromHttpRequests.HttpRequestsActiveState>) {
    this.showLoadingOverlay$ = store.select(fromHttpRequests.getHttpRequestsActiveState)
      .switchMap(show => show ? of(true) : timer(1000).mapTo(false));
  }
}

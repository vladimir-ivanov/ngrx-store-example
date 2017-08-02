import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/onErrorResumeNext';
import {Http, Request, RequestOptions, RequestOptionsArgs, Response, XHRBackend} from '@angular/http';
import {State} from "./reducers/http-request.reducer";
import {Store} from "@ngrx/store";
import {HttpRequestLoadingActions} from "./http-request.actions";
import {AppErrorActions} from "../error-overlay/errror-overlay.actions";

@Injectable()
export class HttpRequestService extends Http {
  private pendingRequestsCounter: number = 0;

  constructor(backend: XHRBackend, defaultOptions: RequestOptions, private store: Store<State>) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.request(url, options));
  }

  private intercept(observable: Observable<Response>): Observable<Response> {
    this.pendingRequestsCounter++;
    this.store.dispatch(new HttpRequestLoadingActions(true));

    return observable
      .catch(res => {
        this.store.dispatch(new AppErrorActions(`${res.status}: ${res.text()}`));

        return Observable.throw(res.json());
      })
      .finally(() => {
        this.pendingRequestsCounter--;

        if (this.pendingRequestsCounter <= 0) {
          this.store.dispatch(new HttpRequestLoadingActions(false));
        }
      });
  }
}

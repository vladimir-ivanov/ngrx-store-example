import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import {Http, Request, RequestOptions, RequestOptionsArgs, Response, XHRBackend} from '@angular/http';
import {State} from "./reducers/http-request.reducer";
import {Store} from "@ngrx/store";
import {HttpRequestLoadingActions} from "./http-request.actions";

@Injectable()
export class HttpRequestService extends Http {
  private pendingRequestsCounter: number = 0;

  constructor(backend: XHRBackend, defaultOptions: RequestOptions, private store: Store<State>) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.request(url, options));
  }

  intercept(observable: Observable<Response>): Observable<Response> {
    this.pendingRequestsCounter++;
    this.store.dispatch(new HttpRequestLoadingActions(true));

    return observable.finally(() => {
      this.pendingRequestsCounter--;

      if (this.pendingRequestsCounter <= 0) {
        this.store.dispatch(new HttpRequestLoadingActions(false));
      }
    });
  }
}

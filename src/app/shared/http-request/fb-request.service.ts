import {Inject, Injectable, InjectionToken} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AsyncSubject} from "rxjs/AsyncSubject";

export let FacebookSdk = new InjectionToken<any>("FacebookSdk");

@Injectable()
export class FbRequestService {
  constructor(@Inject(FacebookSdk) private facebookSdk) {
  }

  request(path: string, params: any): Observable<any> {
    const sub = new AsyncSubject();

    this.facebookSdk.api(path, params, (response) => {
      if (!response || response.error) {
        sub.error(response.error || "Unspecified");

      } else {
        sub.next(response);
      }

      sub.complete();
    });

    return sub;
  }
}

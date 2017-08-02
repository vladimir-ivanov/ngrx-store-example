import {NgModule} from '@angular/core';
import {HttpRequestService} from "./http-request.service";
import {HttpModule} from "@angular/http";
import {reducers} from "./reducers/index";
import {StoreModule} from "@ngrx/store";
import {FacebookSdk, FbRequestService} from "./fb-request.service";

@NgModule({
  imports: [
    HttpModule,
    StoreModule.forFeature('requests', reducers),
  ],
  providers: [{provide: FacebookSdk, useFactory: () => window['facebook']}, HttpRequestService, FbRequestService]
})
export class HttpRequestModule {
}

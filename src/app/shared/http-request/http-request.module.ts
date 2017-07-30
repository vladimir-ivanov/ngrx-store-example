import {NgModule} from '@angular/core';
import {HttpRequestService} from "./http-request.service";
import {HttpModule} from "@angular/http";
import {reducers} from "./reducers/index";
import {StoreModule} from "@ngrx/store";

@NgModule({
  imports: [
    HttpModule,
    StoreModule.forFeature('requests', reducers),
  ],
  providers: [HttpRequestService]
})
export class HttpRequestModule { }

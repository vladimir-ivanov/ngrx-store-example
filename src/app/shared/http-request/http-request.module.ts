import {NgModule} from '@angular/core';
import {HttpModule} from "@angular/http";
import {reducers} from "./reducers/index";
import {StoreModule} from "@ngrx/store";

@NgModule({
  imports: [
    HttpModule,
    StoreModule.forFeature('requests', reducers),
  ]
})
export class HttpRequestModule {
}

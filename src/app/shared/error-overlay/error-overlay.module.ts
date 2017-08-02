import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorOverlayComponent} from './error-overlay.component';
import {MaterialModule} from "@angular/material";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./reducers/index";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature('appError', reducers),
  ],
  declarations: [ErrorOverlayComponent],
  exports: [ErrorOverlayComponent]
})
export class ErrorOverlayModule {
}

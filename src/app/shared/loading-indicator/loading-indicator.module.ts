import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadingIndicatorComponent} from "./loading-indicator.component";
import {MaterialModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [LoadingIndicatorComponent],
  exports: [LoadingIndicatorComponent]
})
export class LoadingIndicatorModule {
}

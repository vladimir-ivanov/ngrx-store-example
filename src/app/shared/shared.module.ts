import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutModule} from "./layout/layout.module";
import {ToolbarModule} from "./toolbar/toolbar.module";
import {SidenavModule} from "./sidenav/sidenav.module";
import {NotFoundPageComponent} from "./not-found-page";
import {MaterialModule} from "@angular/material";
import {LoadingIndicatorModule} from "./loading-indicator/loading-indicator.module";

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    ToolbarModule,
    MaterialModule,
    SidenavModule,
    LoadingIndicatorModule
  ],
  exports: [LayoutModule, ToolbarModule, SidenavModule, LoadingIndicatorModule, NotFoundPageComponent],
  declarations: [NotFoundPageComponent]
})
export class SharedModule {
}

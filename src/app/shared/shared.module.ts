import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutModule} from "./layout/layout.module";
import {ToolbarModule} from "./toolbar/toolbar.module";
import {SidenavModule} from "./sidenav/sidenav.module";
import {NotFoundPageComponent} from "./not-found-page";
import {MaterialModule} from "@angular/material";
import {LoadingIndicatorModule} from "./loading-indicator/loading-indicator.module";
import {ErrorOverlayModule} from "./error-overlay/error-overlay.module";

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    ToolbarModule,
    MaterialModule,
    SidenavModule,
    LoadingIndicatorModule,
    ErrorOverlayModule
  ],
  exports: [LayoutModule, ToolbarModule, SidenavModule, LoadingIndicatorModule, ErrorOverlayModule, NotFoundPageComponent],
  declarations: [NotFoundPageComponent]
})
export class SharedModule {
}

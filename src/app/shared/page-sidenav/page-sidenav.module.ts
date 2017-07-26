import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageSidenavComponent} from "./page-sidenav.component";
import {MaterialModule} from "@angular/material";
import {SidenavModule} from "../sidenav/sidenav.module";
import {ToolbarModule} from "../toolbar/toolbar.module";
import {LayoutModule} from "../layout/layout.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    LayoutModule,
    ToolbarModule,
    SidenavModule
  ],
  declarations: [PageSidenavComponent],
  exports: [PageSidenavComponent]
})
export class PageSidenavModule {
}

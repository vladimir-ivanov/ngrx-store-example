import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidenavComponent} from "./sidenav.component";
import {MaterialModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [SidenavComponent],
  exports: [SidenavComponent]
})
export class SidenavModule { }

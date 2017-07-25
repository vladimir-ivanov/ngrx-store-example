import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import {MaterialModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class LayoutModule { }

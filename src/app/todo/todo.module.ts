import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoComponent} from "./todo.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodoComponent],
  exports: [TodoComponent]
})
export class TodoModule { }

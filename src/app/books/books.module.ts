import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksComponent} from './books.component';
import {BookSearchComponent} from './book-search/book-search.component';
import {MaterialModule} from "@angular/material";
import {PageSidenavModule} from "../shared/page-sidenav/page-sidenav.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PageSidenavModule
  ],
  declarations: [BooksComponent, BookSearchComponent],
  exports: [BookSearchComponent]
})
export class BooksModule {
}

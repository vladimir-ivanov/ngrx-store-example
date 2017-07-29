import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksComponent} from './books.component';
import {BookSearchComponent} from './book-search.component';
import {MaterialModule} from "@angular/material";
import {PageSidenavModule} from "../shared/page-sidenav/page-sidenav.module";
import {BookEffects} from "./effects/book.effects";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./reducers/index";
import {BookDetailsComponent} from "./book-details.component";
import {BookPreviewListComponent} from "./book-preview-list.component";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature('books', reducers),
    EffectsModule.forFeature([BookEffects]),
    PageSidenavModule
  ],
  declarations: [BooksComponent, BookSearchComponent, BookDetailsComponent, BookPreviewListComponent],
  exports: [BookSearchComponent],
  entryComponents: []
})
export class BooksModule {
}

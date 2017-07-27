import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Book} from "./models/book";

@Component({
  selector: 'app-books-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `    
    <app-book-details *ngFor="let book of books" [book]="book"></app-book-details>
  `,
  styles: [
      `
      :host {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    `,
  ],
})
export class BookPreviewListComponent {
  @Input() books: Book[];
}

import {Component, OnInit} from '@angular/core';
import {BooksService} from "./books.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  constructor(private bookService: BooksService) {
    console.log(bookService);
  }
  ngOnInit(): void {
  }
}

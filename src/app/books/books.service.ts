import 'rxjs/add/operator/map';
import {Inject, Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AppConfig} from "../config";
import {Book} from "./models/book";

@Injectable()
export class BooksService {
  constructor(private http: Http, @Inject(AppConfig) private config) {
  }

  searchBooks(queryTitle: string): Observable<Book[]> {
    return this.http
      .get(`${this.config.paths.books}?q=${queryTitle}`)
      .map(res => res.json().items || []);
  }

  retrieveBook(volumeId: string): Observable<Book> {
    return this.http.get(`${this.config.paths.books}/${volumeId}`).map(res => res.json());
  }
}

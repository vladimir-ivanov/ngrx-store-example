import 'rxjs/add/operator/map';
import {Inject, Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AppConfig} from "../config";
import {Book} from "./models/book";
import {AsyncSubject} from "rxjs/AsyncSubject";
import {FbRequestService} from "../shared/http-request/fb-request.service";

@Injectable()
export class BooksService {
  constructor(private http: Http, private fb: FbRequestService, @Inject(AppConfig) private config) {
  }

  searchBooks(queryTitle: string): Observable<Book[]> {
    this.getMyLastName().subscribe(console.log);

    return this.http
      .get(`${this.config.paths.books}?q=${queryTitle}`)
      .map(res => res.json().items || []);
  }


  getMyLastName() {
    const sub = new AsyncSubject();

    return this.fb.request('/me', {});
  }

  retrieveBook(volumeId: string): Observable<Book> {
    return this.http.get(`${this.config.paths.books}/${volumeId}`).map(res => res.json());
  }
}

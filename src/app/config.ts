import {InjectionToken} from "@angular/core";

export const paths = {
  books: 'https://www.googleapis.com/books/v1/drast'
};

export let AppConfig = new InjectionToken<string>("AppConfig");

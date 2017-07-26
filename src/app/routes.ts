import { Routes } from '@angular/router';
import {NotFoundPageComponent} from "./shared/not-found-page";
import {AppComponent} from "./app.component";
import {BooksComponent} from "./books/books.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: BooksComponent,
   // canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundPageComponent },
];

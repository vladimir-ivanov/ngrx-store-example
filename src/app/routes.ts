import { Routes } from '@angular/router';
import {NotFoundPageComponent} from "./shared/not-found-page";
import {AppComponent} from "./app.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: AppComponent,
   // canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundPageComponent },
];

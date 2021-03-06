import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {SharedModule} from "./shared/shared.module";
import {Http, HttpModule, RequestOptions, XHRBackend} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {EffectsModule} from "@ngrx/effects";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {Store, StoreModule} from "@ngrx/store";
import {metaReducers, reducers} from "./reducers";
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {AppConfig, paths} from "./config";
import {BooksModule} from "./books/books.module";
import {BooksService} from "./books/books.service";
import {HttpRequestService} from "./shared/http-request/http-request.service";
import {HttpRequestModule} from "./shared/http-request/http-request.module";
import {State} from "./shared/http-request/reducers/http-request.reducer";
import {ErrorOverlayComponent} from "./shared/error-overlay/error-overlay.component";

export function httpFactory(backend: XHRBackend, options: RequestOptions, store: Store<State>) {
  return new HttpRequestService(backend, options, store);
}

@NgModule({
  entryComponents:[
    ErrorOverlayComponent
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash: true}),
    CommonModule,
    MaterialModule,
    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(reducers, {metaReducers}),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    StoreRouterConnectingModule,

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    // !environment.production ? StoreDevtoolsModule.instrument() : [],

    /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     *
     * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
     */
    EffectsModule.forRoot([]),

    SharedModule,
    BooksModule,
    HttpRequestModule
  ],
  providers: [
    {provide: AppConfig, useValue: {paths}},
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions, Store]
    },
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

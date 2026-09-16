import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from '@core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from "ngx-toastr";
import {provideTranslateService} from '@ngx-translate/core';
import {provideTranslateHttpLoader} from '@ngx-translate/http-loader';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CoreModule,
		BrowserAnimationsModule,
    ToastrModule.forRoot({
      maxOpened: 6,
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true,
      disableTimeOut: true
    })
	],
	providers: [
		{ provide: LOCALE_ID, useValue: 'de-DE' },
		// German is the one fixed active language (same "one active locale,
		// English kept in parallel for a future switch" choice made for
		// every other app in this demo - see e.g. eudi_web_wallet/i18n.py)
		// - not a live switcher, so `lang`/`fallbackLang` are both set here
		// rather than left to runtime detection. TranslateHttpLoader reads
		// src/assets/i18n/{lang}.json (already covered by angular.json's
		// existing "src/assets" asset glob - no build config change
		// needed). NgModule support was removed from ngx-translate as of
		// v18 - provideTranslateService()/TranslatePipe/TranslateDirective
		// are the same standalone-style API for both NgModule and
		// standalone components now (see https://ngx-translate.org/reference/breaking-changes/)
		// - a non-standalone component's own @NgModule just needs
		// TranslatePipe/TranslateDirective added to ITS OWN `imports`
		// array (same as importing a standalone component), not this one.
		provideTranslateService({
			lang: 'de',
			fallbackLang: 'en',
			loader: provideTranslateHttpLoader({
				prefix: './assets/i18n/',
				suffix: '.json',
			}),
		}),
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

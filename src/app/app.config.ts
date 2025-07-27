import {
  ApplicationConfig,
  DEFAULT_CURRENCY_CODE,
  LOCALE_ID,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import localePT from '@angular/common/locales/pt';
import { CurrencyPipe, registerLocaleData } from '@angular/common';

registerLocaleData(localePT, 'pt');
export const appConfig: ApplicationConfig = {
  providers: [
    {provide: LOCALE_ID,  useValue:'pt'},
    {provide:DEFAULT_CURRENCY_CODE, useValue:'BRL'},
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch())
  ],
};

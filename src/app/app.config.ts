import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { provideAuth0 } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideAuth0({
      domain: 'dev-wm1e6hq7phdylrwq.us.auth0.com',
      clientId: 'BTz8TAC8sCNdaBTg7mAeQDOW677jqKVB',
      authorizationParams: {
        redirect_uri: 'http://localhost:4200',
      },
    }),
  ],
};

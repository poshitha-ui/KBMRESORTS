import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';

import { MyTheme } from './theme/my-theme';
import { routes } from './app.routes';
import { register as rigisterSwiperElements } from 'swiper/element/bundle';

rigisterSwiperElements();

export const appConfig: ApplicationConfig = {
  
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: MyTheme,
        options: {
          darkModeSelector: false
        }
      }
    })
  ]
};

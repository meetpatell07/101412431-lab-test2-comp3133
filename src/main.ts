import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
// import { routes } from './app/app.routes';
import { appRoutingProviders } from './app/app.routes';


bootstrapApplication(AppComponent, {
  providers: [
    appRoutingProviders,
    provideHttpClient(),
    // provideRouter(routes),
  ],
}).catch(err => console.error(err));

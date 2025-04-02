import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissionDetailsComponent } from './missiondetails/missiondetails.component';

export const routes: Routes = [
  { path: '', redirectTo: 'missions', pathMatch: 'full' }, // Default route
  { path: 'missions', component: MissionlistComponent },
  { path: 'mission/:id', component: MissionDetailsComponent },
  { path: '**', redirectTo: 'missions' } // Redirect unknown routes
];

export const appRoutingProviders = [
  provideRouter(routes)
];

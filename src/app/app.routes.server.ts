import { Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissionDetailsComponent } from './missiondetails/missiondetails.component';

export const serverRoutes: Routes = [
  {
    path: 'mission/:id',
    loadComponent: () => import('./missionlist/missionlist.component').then(m => m.MissionlistComponent),
    data: {
      prerender: false // Disable prerendering for this route
    }
  },
  // Other routes...
];

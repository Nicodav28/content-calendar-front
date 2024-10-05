import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => HomeComponent),
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/profile/profile.component').then((c) => ProfileComponent),
  },
  {
    path: 'calendar',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/calendar/calendar.component').then(
        (c) => CalendarComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

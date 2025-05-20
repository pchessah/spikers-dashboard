import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/pages/dashboard-page/dashboard-page.component').then(m => m.DashboardPageComponent),
  },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    loadComponent: () => import('./components/home/home.component')
  },
  {
    path: 'store',
    loadComponent: () => import('./components/store/store.component')
  }
];

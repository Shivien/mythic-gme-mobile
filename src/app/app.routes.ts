import { Routes } from '@angular/router';
import { Home } from './main/components/home/home';
import { Layout } from './shared/components/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'fate-chart',
        loadComponent: () => import('./main/components/fate-chart/fate-chart'),
      },
      {
        path: '',
        component: Home,
      },
    ],
  }
];

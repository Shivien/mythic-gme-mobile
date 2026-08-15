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
        title: 'Destin',
        loadComponent: () => import('./main/components/fate-chart/fate-chart'),
      },
      {
        path: 'ose',
        children: [
          {
            path: 'character',
            title: 'OSE / Personnages',
            loadComponent: () => import('./ose/components/character/list/list'),
          },
          {
            path: 'character/new',
            title: 'OSE / Nouveau personnage',
            loadComponent: () => import('./ose/components/character/edit/edit'),
          },
          {
            path: 'character/:id',
            title: 'OSE / Personnage',
            loadComponent: () => import('./ose/components/character/edit/edit'),
          },
          {
            path: 'dungeon-generator',
            title: 'Générateur de donjon',
            loadComponent: () => import('./ose/components/dungeon-generator/dungeon-generator'),
          },
          {
            path: 'xp-calculator',
            title: 'OSE / Calculateur d\'XP',
            loadComponent: () => import('./ose/components/ose-xp-calculator/ose-xp-calculator'),
          },
        ],
      },
      {
        path: '',
        title: 'Accueil',
        component: Home,
      },
    ],
  }
];

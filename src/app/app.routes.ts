import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./features/list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'statistics',
    loadChildren: () =>
      import('./features/statistics/statistics.module').then(
        (m) => m.StatisticsModule
      ),
  },

  { path: '**', redirectTo: 'home' },
];

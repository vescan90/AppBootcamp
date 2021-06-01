import { Routes } from '@angular/router';

//Route for content layout with header, footer and menu.

export const Full_ROUTES: Routes = [
  {
    path: '', loadChildren: () => import('@homeFeed/homeFeed.module').then(m => m.HomeFeedModule)
  },
  { path: 'worker', loadChildren: () => import('@worker/worker.module').then(m => m.WorkerModule) },
  {
    path: 'empresas',
    loadChildren: () => import('@enterprise/enterprise.module').then(m => m.EnterpriseModule)
  }
];

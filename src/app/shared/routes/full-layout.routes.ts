import { Routes } from '@angular/router';

//Route for content layout with header, footer and menu.

export const Full_ROUTES: Routes = [
  {
    path: 'empleados',
    loadChildren: () => import('@employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: 'empresas',
    loadChildren: () => import('@enterprise/enterprise.module').then(m => m.EnterpriseModule)
  }
];

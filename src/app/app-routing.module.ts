import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Full_ROUTES } from '@app/shared/routes/full-layout.routes';
import { FullLayoutComponent } from './layout/full/full-layout.component';

const routes: Routes = [
  //AGREGAR PATH DE LOGIN CUANDO SE TENGA
  {
    path: '',
    component: FullLayoutComponent,
    children: Full_ROUTES
  },
  //CARGAR RUTA DE CONTENT LAYOUT
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

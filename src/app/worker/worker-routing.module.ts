import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '@worker/profile/profile.component';
import { WorkerListComponent } from '@worker/worker-list/worker-list.component';
import { WorkerFormComponent } from '@worker/Worker-form/Worker-form.component';

const routes: Routes = [
  { path: '', component:WorkerListComponent },
  { path: 'edit', component: WorkerFormComponent},
  { path: ':id', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkerRoutingModule { }

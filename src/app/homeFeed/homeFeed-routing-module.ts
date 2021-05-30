import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeFeedComponent } from './homeFeed.component';

const routes: Routes = [
  {
    path: '',
    component: HomeFeedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeFeedRoutingModule{}

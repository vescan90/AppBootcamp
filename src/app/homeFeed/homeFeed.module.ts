import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFeedComponent } from './homeFeed.component';
import { HomeFeedRoutingModule } from './homeFeed-routing-module';

@NgModule({
  imports: [
    CommonModule,
    HomeFeedRoutingModule
  ],
  declarations: [HomeFeedComponent]
})
export class HomeFeedModule { }

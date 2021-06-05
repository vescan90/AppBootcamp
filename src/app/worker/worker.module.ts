import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkerRoutingModule } from './worker-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { WorkerListComponent } from './worker-list/worker-list.component';
import { WorkerFormComponent } from './Worker-form/Worker-form.component';
import { MaterialModule } from '../material.module';
import { PersonService } from '../shared/services/person.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
 ProfileComponent,
 WorkerListComponent,
 WorkerFormComponent,
  ],
  imports: [
    CommonModule,
    WorkerRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers:[
    PersonService
  ]
})
export class WorkerModule { }

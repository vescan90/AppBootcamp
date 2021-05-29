import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterpriseComponent } from '@enterprise/components/enterprise/enterprise.component';
import { EnterpriseRoutingModule } from './enterprise-routing-module';



@NgModule({
  declarations: [
    EnterpriseComponent
  ],
  imports: [
    CommonModule,
    EnterpriseRoutingModule
  ]
})
export class EnterpriseModule { }

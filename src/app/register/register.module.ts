import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterHomeComponent } from './register-home/register-home.component';
import { SharedModule } from '../shared/shared.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    CommonModule,
    RegisterRoutingModule
  ],
  declarations: [
    RegisterHomeComponent
  ]
})
export class RegisterModule { }

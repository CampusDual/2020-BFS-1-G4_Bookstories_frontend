import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListsRoutingModule } from './user-lists-routing.module';
import { UserlistsHomeComponent } from './userlists-home/userlists-home.component';
import { SharedModule } from 'app/shared/shared.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule, 
    UserListsRoutingModule,    
    SharedModule
  ],
  declarations: [
    UserlistsHomeComponent
  ]
})
export class UserListsModule { }

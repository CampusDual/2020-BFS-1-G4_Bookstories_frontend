import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { AuthorsHomeComponent } from './authors-home/authors-home.component';
import { AuthorsDetailComponent } from './authors-detail/authors-detail.component';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    AuthorsRoutingModule
  ],
  declarations: [
    AuthorsHomeComponent,
    AuthorsDetailComponent
  ]
})
export class AuthorsModule { }

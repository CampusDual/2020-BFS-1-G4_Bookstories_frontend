import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CommonModule } from '@angular/common';
import { BooksMiniatureComponent } from './books-miniature/books-miniature.component';

@NgModule({
  imports: [
    OntimizeWebModule,
    
  ],
  declarations: [BooksMiniatureComponent
  ],
  exports: [
    CommonModule,BooksMiniatureComponent
  ]
})
export class SharedModule { }

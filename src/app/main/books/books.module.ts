import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { BooksRoutingModule } from './books-routing.module';
import { BooksHomeComponent} from './books-home/books-home.component'
import { BooksDetailComponent } from './books-detail/books-detail.component';
import { BooksMiniatureComponent } from '../../shared/books-miniature/books-miniature.component';
import { SharedModule } from 'app/shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule, 
    BooksRoutingModule,
    SharedModule
   
  ],
  declarations: [
    BooksHomeComponent,
    BooksDetailComponent,
    
  ]
})

export class BooksModule { }

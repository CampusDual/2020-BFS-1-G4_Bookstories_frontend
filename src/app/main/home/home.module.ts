import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { BooksMiniatureComponent } from '../../shared/books-miniature/books-miniature.component';
import { BooksModule } from '../books/books.module';
import { BooksDetailComponent } from '../books/books-detail/books-detail.component';
import { MainModule } from '../main.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    HomeRoutingModule,
    
    
  ],
  declarations: [
    HomeComponent,
    
    
    
    
    

  ]
})
export class HomeModule { }

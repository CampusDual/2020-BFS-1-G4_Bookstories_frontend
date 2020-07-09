import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CommonModule } from '@angular/common';
import { BooksMiniatureComponent } from './books-miniature/books-miniature.component';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  imports: [
    OntimizeWebModule,
    
  ],
  declarations: [
    BooksMiniatureComponent,
    StarRatingComponent
  ],
  exports: [
    CommonModule,
    BooksMiniatureComponent,
    StarRatingComponent
  ]
})
export class SharedModule { }

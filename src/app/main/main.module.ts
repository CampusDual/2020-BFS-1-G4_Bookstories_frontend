import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';

import { BooksMiniatureComponent } from '../shared/books-miniature/books-miniature.component';


@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    MainRoutingModule,
    
    
  ],
  declarations: [
    MainComponent,
    
    
    
    
    
  ],exports: [BooksMiniatureComponent]
})
export class MainModule { }

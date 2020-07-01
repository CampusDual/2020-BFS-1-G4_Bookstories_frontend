import { Component,Input, OnInit } from '@angular/core';
import { BookModel } from './book.model';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-books-miniature',
  templateUrl: './books-miniature.component.html',
  styleUrls: ['./books-miniature.component.scss']
})
export class BooksMiniatureComponent implements OnInit {
    @Input() public bookitem: any;
    @Input() public book : BookModel;

  constructor() { 
    //this.book = new BookModel(this.bookitem)
    
  }

  ngOnInit() {
    
    this.book = new BookModel(this.bookitem )
  }

}

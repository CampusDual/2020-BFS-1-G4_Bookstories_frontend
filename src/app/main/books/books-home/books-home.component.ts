import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-books-home',
    templateUrl: './books-home.component.html',
    styleUrls: ['./books-home.component.scss']
})
export class BooksHomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    openDetail(item: any) {

    }

    getImageSrc(EMPLOYEEPHOTO: any) {
        return 'data:image/png;base64,' + EMPLOYEEPHOTO;
    }
}

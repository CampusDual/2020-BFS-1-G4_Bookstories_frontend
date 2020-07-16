import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public idlista :number = 1
    constructor(
        private router: Router,
        private actRoute: ActivatedRoute
    ) {
    }

    ngOnInit() {


    }

    navigate() {
        this.router.navigate(['../', 'login'], {relativeTo: this.actRoute});
    }

}

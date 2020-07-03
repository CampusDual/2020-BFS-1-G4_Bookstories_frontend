import { Component,Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  @Input() public bookrating : number;
  constructor() { }

  ngOnInit() {
  }


  showIcon(index:number){
    if (this.bookrating >= index +1) {
      return 'star';
    } else {
      return 'star_border';
    }


  }
}

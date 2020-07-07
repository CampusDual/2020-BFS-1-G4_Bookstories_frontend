import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {ReviewService} from "../../../shared/services/review.service";
import {LoginService} from "ontimize-web-ngx";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.scss']
})
export class BooksDetailComponent implements OnInit {

  private book_id: number;
  user: string = "";
  editMode: boolean = false;
  public activeEditReview: string = ""
  public activeEditRating: number = 0
  constructor(private loginService: LoginService,
    private reviewService: ReviewService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.user = this.loginService.getSessionInfo().user
    this.book_id = +this.route.snapshot.paramMap.get('BOOK_ID');

  }

  @ViewChild("activeReview") aReview: ElementRef;
  @ViewChild("activeValue") aValue: ElementRef;

  createReview() {
    const reviewElement: any = this.aReview
    const review: string = reviewElement.value.value
    const ratingElement: any = this.aValue
    const rating: string = ratingElement.value.value
    this.reviewService.createUserReview(this.loginService.getSessionInfo().user, this.book_id, +rating, review)
    .subscribe();

    this.reloadBook();

  }

  genRatingValues() {
    const array: Array<Object> = [];
    array.push({
      'rating': 1
    });
    array.push({
      'rating': 2
    });
    array.push({
      'rating': 3
    });
    array.push({
      'rating': 4
    });
    array.push({
      'rating': 5
    });
    return array;
  }

  public reloadBook() {

    location.reload(); 

  }

}

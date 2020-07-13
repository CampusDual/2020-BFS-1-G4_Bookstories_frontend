import {Injectable, Injector} from '@angular/core';
import {OntimizeEEService} from "ontimize-web-ngx";

@Injectable({
  providedIn: 'root'
})
export class ReviewService extends OntimizeEEService {


  constructor(protected injector: Injector) {
    super(injector);
    const conf = this.getDefaultServiceConfiguration();
    conf['path'] = '/REVIEWS';
    this.configureService(conf)
  }

  getUserReview(tusers_user: string, books_book_id: number) {
    const filter = {
      'TUSERS_USER': tusers_user,
      'BOOKS_BOOK_ID': books_book_id
    };
    const columns = [
      "BOOKS_BOOK_ID",
      "REVIEW_ID",
      "VALUE",
      "COMMENT",
      "TUSERS_USER"
    ];
    return this.query(filter, columns, 'review').pipe();
  }

  updateUserReview(review_id: number, rating: number, review: string) {
    const filter = {
      'review_id': review_id
    };
    const data = {
      'review_id': review_id,
      "VALUE": parseInt(String(rating)),
      "COMMENT": review,
      "REVIEW_DATE": new Date().getTime()
    };
    const sqlTypes = {
      "VALUE": 4,
      "COMMENT": 12,
      "REVIEW_DATE": 91
    };
    return this.update(filter, data, 'review', sqlTypes).pipe();
  }

  deleteUserReview(review_id: number) {
    const filter = {
      'review_id': review_id
    };
    return this.delete(filter, 'review').pipe();
  }

  createUserReview(tusers_user:string, books_book_id:number, value: number, comment: string){
    const data = {
      "BOOKS_BOOK_ID": books_book_id,
      "VALUE": parseInt(String(value)),
      "COMMENT": comment,
      "TUSERS_USER":tusers_user
    };
    const sqlTypes = {
      "books_book_id":4,
      "value":4,
      "comment":12,
      "tusers_user":12
    };
    return this.insert(data, 'review', sqlTypes).pipe();
  } 

  getRatingValues() {
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
}

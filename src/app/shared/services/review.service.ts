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
      'tusers_user': tusers_user,
      'books_book_id': books_book_id
    };
    const columns = [
      "books_book_id",
      "review_id",
      "value",
      "comment",
      "tusers_user"
    ];
    return this.query(filter, columns, 'review').pipe(
      // tap(x => console.log(x))
    )
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
    return this.insert(data, 'review', sqlTypes).pipe(
      // tap(x => console.log(x))
    )
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

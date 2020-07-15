import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import {ReviewService} from "../../../shared/services/review.service";
import {LoginService} from "ontimize-web-ngx";
import {ActivatedRoute} from "@angular/router";
import { Review } from './review';
import { ListsService } from 'app/shared/services/listServices/lists.service';


@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.scss']
})
export class BooksDetailComponent implements OnInit {

  private book_id: number;
  user: string = "";
  editMode: boolean = false;
  review: Review = null;
  rValues: Array<Object>;
  public activeEditReview: string = ""
  public activeEditRating: number = 0
  public lists : any[]
  @Input() public databooklists : Map<number,boolean> = new Map();


                         //type of list -> list_id asociated for this user
   @Input() public datauserlists : Map<number,number> = new Map();
 


  constructor(private loginService: LoginService,
    private reviewService: ReviewService,
    private route: ActivatedRoute,
    private listservice:ListsService) { }


  ngOnInit() {

    this.user = this.loginService.getSessionInfo().user
    this.book_id = +this.route.snapshot.paramMap.get('BOOK_ID');
    this.getUserOpinion();
    this.rValues = this.genRatingValues()

    console.log("----"+this.book_id)
    this.getbookatUserList(this.book_id).subscribe(value => {
      console.log("test2")
     console.log(value)
      if(value!=undefined){

      this.databooklists.set(ListsService.FAVORITE,false)
      this.databooklists.set(ListsService.WISH,false)
     
      
        for(var i = 0; i <  value.data.length ; i++){
          
          
        if(value.data[i]['TYPE_OF_LIST_IDTYPE_OF_LIST'] == ListsService.FAVORITE){
          console.log("favorite")
          this.databooklists.set(ListsService.FAVORITE,true)


        }
        if(value.data[i]['TYPE_OF_LIST_IDTYPE_OF_LIST'] == ListsService.WISH){
          console.log("wish")
          this.databooklists.set(ListsService.WISH,true)
          

        }
        

      }
      
      
      
    }});


    this.getUserLists().subscribe(value => {
      this.lists = value.data
      if(value!=undefined){
        for(var i = 0; i <  value.data.length ; i++){
          this.datauserlists.set(value.data[i]['idtype_of_list'],value.data[i]['list_id'])
          
          
            
           
          
  
        }
        console.log("datauser")
        console.log(this.datauserlists )
  
  
      }
      
    })



  }

  @ViewChild("activeReview") aReview: ElementRef;
  @ViewChild("activeValue") aValue: ElementRef;

  private getUserOpinion() {
    this.reviewService.getUserReview(this.user, +this.book_id).subscribe(value => {
      this.review = value.data[0]
      this.editMode = this.hasReview()
      if (this.editMode) {
        this.activeEditReview = this.review.COMMENT
        this.activeEditRating = this.review.VALUE
      } else {
        this.activeEditRating = 1
        this.activeEditReview = ""
      }
    })
  }

  createReview() {
    const reviewElement: any = this.aReview
    const review: string = reviewElement.value.value
    const ratingElement: any = this.aValue
    const rating: string = ratingElement.value.value
    this.reviewService.createUserReview(this.loginService.getSessionInfo().user, this.book_id, +rating, review)
    .subscribe();

    this.reloadBook();

  }

  hasReview(): boolean {
    return this.review !== null && typeof this.review !== 'undefined'
  }

  deleteReview() {
    this.reviewService.deleteUserReview(this.review.REVIEW_ID)
    .subscribe(),
      () => {
        this.getUserOpinion()
      }
    this.reloadBook();
  }

  updateReview() {
    const reviewElement: any = this.aReview
    const review: string = reviewElement.value.value
    const ratingElement: any = this.aValue
    const rating: string = ratingElement.value.value
    this.reviewService.updateUserReview(this.review.REVIEW_ID, +rating, review)
    .subscribe(),
      () =>{
        this.getUserOpinion()
      }
    this.reloadBook();
  }

  genRatingValues() {
    const array: Array<Object> = [];
    array.push({
      'rating': 1,
      'stars': "⭐"
    });
    array.push({
      'rating': 2,
      'stars': "⭐⭐"
    });
    array.push({
      'rating': 3,
      'stars': "⭐⭐⭐"
    });
    array.push({
      'rating': 4,
      'stars': "⭐⭐⭐⭐"
    });
    array.push({
      'rating': 5,
      'stars': "⭐⭐⭐⭐⭐"
    });
    return array;
  }

  public reloadBook() {

    location.reload(); 

  }

 
  private getUserLists(){
    return this.listservice.getUserLists(this.user)



  }

  public listsButtonAddClicked(list_type: number){
    console.log("listtype--"+list_type+"  "+this.databooklists.get(list_type))
    if(this.databooklists.get(list_type)){
      this.listservice.delBookToList(this.book_id,this.datauserlists.get(list_type)).subscribe(
        value => console.log(value),
        error => console.log(error),
        
      )}
      else{
        this.listservice.addBookToList(this.book_id,this.datauserlists.get(list_type),0).subscribe(
          value => console.log(value),
          error => console.log(error),
          
        )
  
      }
      console.log("bbb")
      this.ngOnInit()
      
   

  }

  private getbookatUserList(book_id: number){
    return this.listservice.getBookAtUserLists(this.user,book_id)



  }
  public showText(tipo :number) {
    var texto : string = ""
    switch(tipo){
      case 0: {
        if(this.databooklists.get(0)){
          texto = "LIBRARY_CHECK"
        }else{
          texto = "LIBRARY"
        }
        break;
      }
      case 1: {
        if(this.databooklists.get(1)){
          texto = "WISHLIST_CHECK"
        }else{
          texto = "WISHLIST"
        }
        break;
      }

    }
    return texto
  }
}
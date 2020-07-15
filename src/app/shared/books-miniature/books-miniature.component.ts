import { Component,Input, OnInit } from '@angular/core';
import { BookModel } from './book.model';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ListsService } from '../services/listServices/lists.service';
import { LoginService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-books-miniature',
  templateUrl: './books-miniature.component.html',
  styleUrls: ['./books-miniature.component.scss']
})
export class BooksMiniatureComponent implements OnInit {
    @Input() public bookitem: any;
    @Input() public book : BookModel;
    public databooklists : Map<number,boolean> = new Map();

                              //type of list -> list_id asociated for this user
    public datauserlists : Map<number,number> = new Map();
 
    private user : string;
    public lists : any[]

  constructor(private loginService: LoginService,
    private listservice:ListsService) { 
      this.databooklists.set(ListsService.FAVORITE,false)
      this.databooklists.set(ListsService.WISH,false)
    
  }

  ngOnInit() {
    this.user = this.loginService.getSessionInfo().user
    this.book = new BookModel(this.bookitem )
    console.log(this.book.bookId+this.user)

    

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
   
    this.getbookatUserList(this.book.bookId).subscribe(value => {
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
      
      
      console.log(this.databooklists)
    }});
    
   

  }
  ngAfterViewInit() {

    
    

  }


private getbookatUserList(book_id: number){
    return this.listservice.getBookAtUserLists(this.user,book_id)



  }

  public showIcon(tipo :number) {
    var texto : string = ""
    switch(tipo){
      case 0: {
        if(this.databooklists.get(0)){
          texto = "star"
        }else{
          texto = "star_border"
        }
        break;
      }
      case 1: {
        if(this.databooklists.get(0)){
          texto = "library_add_check"
        }else{
          texto = "library_add"
        }
        break;
      }

    }
    return texto
  }

  public listsButtonAddClicked(list_type: number){
    if(this.databooklists.get(list_type)){
    this.listservice.addBookToList(this.book.bookId,this.datauserlists.get(list_type),0).subscribe(
      value => console.log(value),
      error => console.log(error),
      
    )}
    else{
      this.listservice.delBookToList(this.book.bookId,this.datauserlists.get(list_type)).subscribe(
        value => console.log(value),
        error => console.log(error),
        
      )

    }

    
  }

  private getUserLists(){
    return this.listservice.getUserLists(this.user)



  }

}

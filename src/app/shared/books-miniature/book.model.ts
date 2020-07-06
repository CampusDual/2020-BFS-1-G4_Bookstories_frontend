import { title } from "process";

export class BookModel  {
    public bookId : number;
    public bookTitle : string;
    public  bookCover : string;
    // Author
    public bookAuthorId : number;
    public  bookAuthor : string;
    //  public  bookAuthors : BookAuthors []
    // language
    public bookLanguageId : number;
    public bookLanguage : string;
    public bookRating : number;
    
    


    constructor( item : any
    ) {
      //console.log(item['BOOK_ID'] )
      this.bookId =item['BOOK_ID']
      this.bookTitle = item['BOOK_TITLE']
      this.bookLanguage = item['LANGUAGE_NAME'];
      this.bookCover = item['COVER_PAGE'];
      this.bookAuthor = item['NAME'];
      this.bookRating = item['BOOK_RATING']
      console.log(item['BOOK_RATING'])
        
  
    }
  
  
  
  }
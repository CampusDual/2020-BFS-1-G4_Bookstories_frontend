import { Injectable, Injector } from '@angular/core';
import { BookModel } from 'app/shared/books-miniature/book.model';
import { OntimizeEEService } from 'ontimize-web-ngx';

@Injectable({
  providedIn: 'root'
})

export class ListsService extends OntimizeEEService {
  public static FAVORITE :number = 0;
  public static WISH :number = 1;
  private lists: any[]
private books : BookModel[]




  constructor(protected injector: Injector) { 
    super(injector);
    const conf = this.getDefaultServiceConfiguration();
    conf['path'] = '/LISTS';
    this.configureService(conf)

  }

  getUserLists(user_: string) {
    const filter = {
      'tusers_user': user_
    };
    const columns = [
      "list_id",
      "lib_name",
      "creation_date",
      "descripcion",
      "idtype_of_list",
      "tusers_user",
      "name"
    ];
    return this.query(filter, columns, 'lists').pipe(
     
    )
  }
  addBookToList(book_id: number, list_id: number,estado:number) {
    const data = {
      "BOOKS_BOOK_ID": book_id,
      
      "LIST_LIST_ID": list_id,
      "ESTADO": estado
      
    };
    const sqlTypes = {
      "BOOKS_BOOK_ID": 4,
      "LIST_LIST_ID": 4,
      "ESTADO": 4
      
    };
    return this.insert(data, 'bookOfList', sqlTypes).pipe(
     
      
    )
  }
  delBookToList(book_id: number, list_id: number) {
    const data = {
      "BOOKS_BOOK_ID": book_id,
      
      "LIST_LIST_ID": list_id
     
      
    };
    const sqlTypes = {
      "BOOKS_BOOK_ID": 4,
      "LIST_LIST_ID": 4,
      "ESTADO": 4
      
    };
    return this.delete(data, 'bookOfList', sqlTypes).pipe(
     
      
    )
  }

  getBookAtUserLists(user_: string,book_id :number) {
    const filter = {
      'TUSERS_USER': user_,
      "BOOKS_BOOK_ID" : book_id,
    
    };
    const columns = [
      "LIST_ID",
      "BOOKS_BOOK_ID",
      "DATE_ADD",
      "LIB_NAME",
      "LIST_LIB_ID",
      "TYPE_OF_LIST_IDTYPE_OF_LIST",
      "TUSERS_USER"
    ];
    

    return this.query(filter, columns, 'bookAtList').pipe(
    )
  }
  
}

import { Injectable, Injector } from '@angular/core';
import { BookModel } from 'app/shared/books-miniature/book.model';
import { OntimizeEEService } from 'ontimize-web-ngx';

@Injectable({
  providedIn: 'root'
})

export class ListsService extends OntimizeEEService {
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
  getBooksOfLists(list_id: number) {
    const filter = {
      'list_id': list_id
    };
    const columns = [
      "list_id",
      "lib_name",
      "creation_date",
      "descripcion",
      "type_of_list_idtype_of_list",
      "tusers_user",
      "name"
    ];
    return this.query(filter, columns, 'lists').pipe(
     
    )
  }
}

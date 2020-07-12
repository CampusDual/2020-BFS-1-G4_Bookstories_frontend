import { Component, OnInit } from '@angular/core';
import { ListsService } from 'app/shared/services/listServices/lists.service';
import { LoginService } from 'ontimize-web-ngx';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-userlists-home',
  templateUrl: './userlists-home.component.html',
  styleUrls: ['./userlists-home.component.scss']
})
export class UserlistsHomeComponent implements OnInit {
  public user : string =""
  public lists : any[]

  constructor(private loginService: LoginService,
              private listservice:ListsService) {



   }

  ngOnInit() {
    this.user = this.loginService.getSessionInfo().user

    this.getUserLists().subscribe(value => {
      this.lists = value.data
      
      
    })

  }

  private getUserLists(){
    return this.listservice.getUserLists(this.user)



  }


  getDataArray() {
    
    //const array: Array<Object> = new Array(this.lists);
    const array: Array<Object> = [];
    
    if(this.lists.length != undefined){
    this.lists.forEach(function(item) 
    { 
      array.push(
        {
          'key': item['list_id'],
          'value': item['lib_name']
        }
      )});

      }
    return array;
  }

 
  public getValueSimple(): any {
    return 2;
  }

  onSetValueOnValueChange(){
  
   console.log("combo cambiado")
}
  
}

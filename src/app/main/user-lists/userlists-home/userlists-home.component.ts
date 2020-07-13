import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ListsService } from 'app/shared/services/listServices/lists.service';
import { LoginService, OFormValue } from 'ontimize-web-ngx';
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
              private listservice:ListsService
              ) {   }

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
      if(item != undefined){
      array.push(
        {
          'key': item['list_id'],
          'value': item['lib_name']
        }
      )}});

      }
    return array;
  }

  @ViewChild("COMBOLISTAS") combovalue: any;
  @ViewChild("COMBOLISTAS") combovalue2: ElementRef;
  public getValueSimple(): any {
    var seleccion : number = 2;
     var sel :OFormValue = this.combovalue.value
    if(sel != undefined){
      seleccion  = sel.value;
     console.log(seleccion)}
  

    return seleccion;
  }

  
  }
  
}

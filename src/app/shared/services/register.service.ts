import {Injectable, Injector} from '@angular/core';
import {OntimizeEEService} from "ontimize-web-ngx";

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends OntimizeEEService {


  constructor(protected injector: Injector) {
    super(injector);
    const conf = this.getDefaultServiceConfiguration();
    conf['path'] = '/users';
    this.configureService(conf)
  }

  createUserAccount(user_:string, password:string, email: string){
    const data = {
      "USER_": user_,
      "NAME": user_,
      "SURNAME": user_,
      "PASSWORD": password,
      "EMAIL": email
    };
    const sqlTypes = {
      "USER_":12,
      "NAME": 12,
      "SURNAME": 12,
      "PASSWORD":12,
      "EMAIL":12
    };
    return this.insert(data, 'user', sqlTypes).pipe();
  } 

}

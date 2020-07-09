import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlistsHomeComponent } from './userlists-home/userlists-home.component';

const routes: Routes = [{
  path : '',
  component: UserlistsHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserListsRoutingModule { }

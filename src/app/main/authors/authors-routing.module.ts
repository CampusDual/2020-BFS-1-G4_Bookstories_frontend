import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsHomeComponent } from './authors-home/authors-home.component';
import { AuthorsDetailComponent } from './authors-detail/authors-detail.component';

const routes: Routes = [{
  path : '',
  component: AuthorsHomeComponent
},
{
  path : ':id_author',
  component: AuthorsDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }

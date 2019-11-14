import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CvComponent} from './cv/cv/cv.component';
import {TodoComponent} from './todo/todo.component';
import {ColorComponent} from './color/color.component';
import {FilsComponent} from './fils/fils.component';
import {ParamsComponent} from './params/params.component';
import {DetailCvComponent} from './cv/detail-cv/detail-cv.component';
import {FrontComponent} from './front/front.component';
import {AdminComponent} from './admin/admin.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './login/login.component';
import {AddPersonneComponent} from './cv/add-personne/add-personne.component';
import {LoginGuard} from './guards/login-guard';


const routes: Routes = [
  {
    path: '', component: FrontComponent, children: [
      {path: 'todo', component: TodoComponent},
      {path: 'color', component: ColorComponent},
      {path: 'test/:name/:age', component: ParamsComponent}
    ]
  },
  {
    path: 'cv', children: [
      {path: '', component: CvComponent},
      {path: 'add', component: AddPersonneComponent, canActivate: [LoginGuard]},
      {path: ':id', component: DetailCvComponent},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

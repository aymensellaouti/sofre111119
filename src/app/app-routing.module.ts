import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cv/cv/cv.component';
import {TodoComponent} from './todo/todo.component';
import {ColorComponent} from './color/color.component';
import {FilsComponent} from './fils/fils.component';
import {ParamsComponent} from './params/params.component';


const routes: Routes = [
  {path: 'cv', component: CvComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'color', component: ColorComponent},
  {path: 'test/:name/:age', component: ParamsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

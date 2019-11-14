import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third.component';
import { ColorComponent } from './color/color.component';
import {FormsModule} from '@angular/forms';
import { CardComponent } from './card/card.component';
import { PereComponent } from './pere/pere.component';
import { FilsComponent } from './fils/fils.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { DetailComponent } from './cv/detail/detail.component';
import { CvComponent } from './cv/cv/cv.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { NgclassComponent } from './directives/ngclass/ngclass.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { TodoComponent } from './todo/todo.component';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { HeaderComponent } from './header/header.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { ParamsComponent } from './params/params.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { AdminComponent } from './admin/admin.component';
import {FrontComponent} from './front/front.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ObservableComponent } from './observable/observable.component';
import { HttpComponent } from './http/http.component';
import {HttpClientModule} from '@angular/common/http';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';
import {LoginGuard} from './guards/login-guard';
import {AuthentificationInterceptorProvider} from './interceptors/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    ThirdComponent,
    ColorComponent,
    CardComponent,
    PereComponent,
    FilsComponent,
    ListComponent,
    ItemComponent,
    DetailComponent,
    CvComponent,
    NgstyleComponent,
    NgclassComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    TodoComponent,
    EmbaucheComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    ParamsComponent,
    DetailCvComponent,
    AdminComponent,
    FrontComponent,
    NotFoundComponent,
    LoginComponent,
    ObservableComponent,
    HttpComponent,
    AddPersonneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthentificationInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

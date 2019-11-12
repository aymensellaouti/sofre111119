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

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    ThirdComponent,
    ColorComponent,
    CardComponent,
    PereComponent,
    FilsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

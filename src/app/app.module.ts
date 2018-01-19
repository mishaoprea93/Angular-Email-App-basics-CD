import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmailsComponentComponent } from './emails-component/emails-component.component';


@NgModule({
  declarations: [
    AppComponent,
    EmailsComponentComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

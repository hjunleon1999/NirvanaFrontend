import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MainModule} from './main/main.module';


import { ErrorPageComponent } from './error-page/error-page.component'
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component'

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MainModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

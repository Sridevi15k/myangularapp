import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from './truncate.pipe';
import { HttpClientModule } from '@angular/common/http';

//app.module.ts is the root module. 
//every application must have at least one root level module that bootstraps (create) application.
//modules(M), components(C) and services(S) are TS classes.
//decorators like @NgModule are used to differentiate M, C and S and contains objects. Objects have keys like declarations, imports, providers, bootstrap.
//Components must be injected to module and it is module's responsibility to use the component.
//pipes and directives go into declarations as well.
@NgModule({
  declarations: [
    AppComponent,
    TruncatePipe
  ],
  
  //some modules can be used as shared modules by exporting and importing.
  //BrowserModule is resp for DOM. Help us to render shared modular services to the browser.
  //AppRoutingModule to navigate from one page to another.
  imports: [
    BrowserModule,
    //AppRoutingModule is imported from app-routing.module.ts
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],

  //services are some classes which are decorated with injectable decorators.
//providers are creators of services that are to write any logic, add functionality
  providers: [],
  //the main application view, called the root component, which hosts all other app views.
  bootstrap: [AppComponent]
})

export class AppModule { }

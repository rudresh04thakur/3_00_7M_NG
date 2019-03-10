import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { App_1RoutingModule } from './app_1-routing.module';
import { App_1Component } from './app_1.component';
import { HeaderComponent } from './header/header.component';


// const routes:Routes = [
//   //{path:'',component:HomeComponent},
//   {path:'',redirectTo:'home',pathMatch:"full"},
//   {path:"login" ,component:LoginComponent},
//   {path:"register" ,component:RegisterComponent},
//   {path:"home" ,component:HomeComponent},
//   {path:'**',component:NotfoundComponent}
// ]
@NgModule({
  declarations: [
    App_1Component,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    App_1RoutingModule,
    //RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [App_1Component]
})
export class App_1Module { }

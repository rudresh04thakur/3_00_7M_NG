import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AllService } from './all.service';
import { HttpClientModule } from '@angular/common/http';

import{ Routes,RouterModule } from '@angular/router'
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KeysPipe } from './keys.pipe';
import { ViewComponent } from './view/view.component'


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
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NotfoundComponent,
    KeysPipe,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

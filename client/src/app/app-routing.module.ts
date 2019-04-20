import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { NotfoundComponent } from './notfound/notfound.component'
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  //{path:'',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:"login" ,component:LoginComponent},
  {path:"register" ,component:RegisterComponent},
  {path:"home" ,component:HomeComponent,children:[
    {path:"register" ,component:RegisterComponent}
  ]},
  {path:"view/:id",component: ViewComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

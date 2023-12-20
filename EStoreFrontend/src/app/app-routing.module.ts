import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  {
    path:'login', component:LoginComponent,
  },
  {
    path:'userlist', component:UserListComponent,
  },
  {
    path:'landing', component:LandingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

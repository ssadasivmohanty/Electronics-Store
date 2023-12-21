import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


const routes: Routes = [
  {
    path:'login', component:LoginComponent,
  },
  {
    path:'userlist', component:UserListComponent,
  },
  {
    path:'landing', component:LandingComponent,
  },
  {
    path:'register', component:RegisterComponent,
  },
  {
    path:'dashboard', component:UserDashboardComponent,
  },
  {
    path:'admin-dashboard', component:AdminDashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

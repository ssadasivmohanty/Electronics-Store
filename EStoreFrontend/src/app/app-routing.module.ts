import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { LandingComponent } from './pages/landing/landing.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { UserProfilePopupComponent } from './user-profile-popup/user-profile-popup.component';


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
    path:'dashboard', component:DashboardComponent,
  },
  {
    path:'admin-dashboard', component:AdminDashboardComponent,
  },
  {
    path:'about', component:AboutComponent,
  },
  {
    path: 'user-profile-popup', component:UserProfilePopupComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

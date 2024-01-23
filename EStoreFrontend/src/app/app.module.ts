import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LandingComponent } from './pages/landing/landing.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './pages/footer/footer.component';
import { UserProfilePopupComponent } from './user-profile-popup/user-profile-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    SignupComponent,
    LandingComponent,
    UserListComponent,
    RegisterComponent,
    NavbarComponent,
    AboutComponent,
    FooterComponent,
    UserProfilePopupComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    NgbActiveModal,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

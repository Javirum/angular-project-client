import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { AuthService } from './services/auth.service';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RequireAmonGuardService } from './guards/require-amon-guard.service';
import { RequireUserGuard } from './guards/require-user-guard.service';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EventPageComponent } from './pages/event-page/event-page.component';
import { BookingComponent } from './pages/booking/booking.component';
import { LogoutComponent } from './pages/logout/logout.component';

// Components
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'signup', component: SignupPageComponent, canActivate: [RequireAmonGuardService] },
  { path: 'login', component: LoginPageComponent, canActivate: [RequireAmonGuardService] },
  { path: 'search', component: SearchPageComponent, canActivate: [RequireUserGuard] },
  { path: 'event', component: EventPageComponent, canActivate: [RequireUserGuard] },
  { path: 'booking', component: BookingComponent, canActivate: [RequireUserGuard] },
  { path: 'logout', component: LogoutComponent }


];


@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    SearchPageComponent,
    LoginPageComponent,
    LogoutComponent,
    SearchPageComponent,
    HomePageComponent,
    EventPageComponent,
    BookingComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    RequireAmonGuardService,
    RequireUserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

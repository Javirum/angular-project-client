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

// Components
const routes: Routes = [
  { path: 'signup', component: SignupPageComponent, canActivate: [RequireAmonGuardService] },
  { path: 'login', component: LoginPageComponent, canActivate: [RequireAmonGuardService] },
  { path: 'search', component: SearchPageComponent, canActivate: [RequireUserGuard] }
];


@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    SearchPageComponent,
    LoginPageComponent,
    SearchPageComponent
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

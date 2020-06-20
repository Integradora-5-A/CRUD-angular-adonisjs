import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

//Routes
import {APP_ROUTING} from './app.routes';

//Services
import {Authservice} from "./services/authservice.service";
import {AuthGuardService} from "./services/auth-guard.service";
import {TaskService} from "./services/task.service";
//Components
import {AppComponent} from './app.component';
import {LoginComponent} from './Components/UserComponents/login/login.component';
import {RegisterComponent} from './Components/UserComponents/register/register.component';
import {ProfileComponent} from './Components/UserComponents/profile/profile.component';
import {HomeComponent} from './Components/MasterComponents/home/home.component';
import {NavbarComponent} from './Components/MasterComponents/navbar/navbar.component';
import {TasksComponent} from './Components/CrudComponents/tasks/tasks.component';
import {TokenInterceptorService} from "./services/token-interceptor.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    NavbarComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [Authservice,
    AuthGuardService,
    TaskService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

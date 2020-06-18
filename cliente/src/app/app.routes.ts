import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./Components/MasterComponents/home/home.component";
import {LoginComponent} from "./Components/UserComponents/login/login.component";
import {RegisterComponent} from "./Components/UserComponents/register/register.component";
import {ProfileComponent} from "./Components/UserComponents/profile/profile.component";
import {TasksComponent} from "./Components/CrudComponents/tasks/tasks.component";
import {AuthGuardService} from "./services/auth-guard.service";

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent,canActivate:[AuthGuardService]},
  {path: 'crud', component: TasksComponent,canActivate:[AuthGuardService]},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

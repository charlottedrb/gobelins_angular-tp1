import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { PasswordForgetComponent } from './password-forget/password-forget.component';
import { SignupComponent } from './signup/signup.component';
import {ErrorPageComponent} from "./error-page/error-page.component";

const routes: Routes = [
    {
        path: '', // Chemin par défaut http://localhost:4200 ou serveur renvoie sur /home-page
        redirectTo: 'home-page',
        pathMatch: 'full'
    },
     {
        path: 'home-page', // correspond à http://localhost:4200/home-page
        component: HomePageComponent
    },
    {
        path: 'login', // correspond à http://localhost:4200/login
        component: LoginComponent
    },
    {
        path: 'password_forget',
        component: PasswordForgetComponent // correspond à http://localhost:4200/password_forget
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: '**',
        component: ErrorPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }

import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import {AdminDashboardComponent} from './admin/dashboard/dashboard.component';
import {ReceptionistDashboardComponent} from './receptionist/dashboard/dashboard.component';
import {GuestDashboardComponent} from './guest/dashboard/dashboard.component';
import { SignupComponent } from './auth/signup/signup.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    // {path:'admin',component:AdminDashboardComponent},
    // {path:'receptionist',component:ReceptionistDashboardComponent},
    // {path:'guest',component:GuestDashboardComponent},
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin', children: [
        { path: 'dashboard', component: AdminDashboardComponent },
    ], },

    {
        path:'receptionist',
        children: [
            { path: 'dashboard', component: ReceptionistDashboardComponent }
        ]
    },
    {
        path:'guest',
        children: [
            { path: 'dashboard', component: GuestDashboardComponent }
        ],
    }
];

import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './services/auth/auth.service';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "home",
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        canActivate: [AuthService]
    },
    {
        path: "dashboard",
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
        canActivate: [AuthService]
    }
];

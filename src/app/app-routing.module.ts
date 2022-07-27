import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ApplyloanComponent } from './applyloan/applyloan.component';
import { ApprovedloanComponent } from './approvedloan/approvedloan.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'aboutus',
        component: AboutComponent,
    },
    {
        path: 'emiCalculator',
        component: EmicalculatorComponent,
    },
    {
        path: 'applyLoan',
        component: ApplyloanComponent,
    },
    {
        path: 'userDashboard',
        component: UserdashboardComponent,
        children: [
            {
                path: 'approvedLoan',
                component: ApprovedloanComponent
            }
        ]
    },
    {
        path: 'adminDashboard',
        component: AdmindashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

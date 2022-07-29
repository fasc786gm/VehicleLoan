import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ApplyloanComponent } from './applyloan/applyloan.component';
import { ApprovedloanComponent } from './approvedloan/approvedloan.component';
import { CarmakeComponent } from './carmake/carmake.component';
import { CheckeligibilityComponent } from './checkeligibility/checkeligibility.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { HomeComponent } from './home/home.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';
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
                path: '',
                component: LoandetailsComponent
            },
            {
                path: 'approvedLoan',
                component: ApprovedloanComponent
            }
        ]
    },
    {
        path: 'adminDashboard',
        component: AdmindashboardComponent,
        children: [
            {
                path: '',
                component: AddvehicleComponent
            }
        ]
    },
    {
        path: 'checkEligibility',
        component: CheckeligibilityComponent
    },
    {
        path: 'carMake',
        component: CarmakeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

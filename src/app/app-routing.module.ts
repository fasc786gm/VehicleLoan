import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddloanComponent } from './addloan/addloan.component';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { AdminapplicantsComponent } from './adminapplicants/adminapplicants.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminrejectedapplicantsComponent } from './adminrejectedapplicants/adminrejectedapplicants.component';
import { ApplyloanComponent } from './applyloan/applyloan.component';
import { ApprovedloanComponent } from './approvedloan/approvedloan.component';
import { CarmakeComponent } from './carmake/carmake.component';
import { CheckeligibilityComponent } from './checkeligibility/checkeligibility.component';
import { DocumentsComponent } from './documents/documents.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { EmischedulerComponent } from './emischeduler/emischeduler.component';
import { EmploymentdetailsComponent } from './employmentdetails/employmentdetails.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';
import { LoginComponent } from './login/login.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { RegisterComponent } from './register/register.component';
import { UserallapplicationsComponent } from './userallapplications/userallapplications.component';
import { UserapprovedapplicationsComponent } from './userapprovedapplications/userapprovedapplications.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UseridComponent } from './userid/userid.component';
import { UserrejectedapplicationsComponent } from './userrejectedapplications/userrejectedapplications.component';
import { VehiclemakeComponent } from './vehiclemake/vehiclemake.component';
import { VehiclespecificationComponent } from './vehiclespecification/vehiclespecification.component';

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
        path: 'vehicleSpecification',
        component: VehiclespecificationComponent
    },
    {
        path: 'userDashboard',
        component: UserdashboardComponent,
        children: [
            {
                path: '',
                component: UserallapplicationsComponent
            },
            {
                path: 'approvedApplications',
                component: UserapprovedapplicationsComponent
            },
            {
                path: 'rejectedApplications',
                component: UserrejectedapplicationsComponent
            },
            {
                path: 'emiScheduler',
                component: EmischedulerComponent
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
            },
            {
                path: 'addLoan',
                component: AddloanComponent
            },
            {
                path: 'adminApplicants',
                component: AdminapplicantsComponent
            },
            {
                path: 'rejectedApplications',
                component: AdminrejectedapplicantsComponent
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
    },
    {
        path: 'vehicleMake',
        component: VehiclemakeComponent
    },
    {
        path: 'personalDetails',
        component: PersonaldetailsComponent
    },
    {
        path: 'employmentDetails',
        component: EmploymentdetailsComponent
    },
    {
        path: "documents",
        component: DocumentsComponent
    },
    {
        path: 'forgotPassword/:userId',
        component: ForgotpasswordComponent
    },
    {
        path: 'resetPassword',
        component: UseridComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule],
})
export class AppRoutingModule { }

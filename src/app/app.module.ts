import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { ApplyloanComponent } from './applyloan/applyloan.component';
import { HighchartsChartComponent, HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from "@angular/common/http"
import { UserService } from './user.service';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ApprovedloanComponent } from './approvedloan/approvedloan.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';
import { CheckeligibilityComponent } from './checkeligibility/checkeligibility.component';
import { CarmakeComponent } from './carmake/carmake.component';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { AddloanComponent } from './addloan/addloan.component';
import { VehiclespecificationComponent } from './vehiclespecification/vehiclespecification.component';
import { VehiclemakeComponent } from './vehiclemake/vehiclemake.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { DocumentsComponent } from './documents/documents.component';
import { EmploymentdetailsComponent } from './employmentdetails/employmentdetails.component';
import { AdminapplicantsComponent } from './adminapplicants/adminapplicants.component';
import { AdminrejectedapplicantsComponent } from './adminrejectedapplicants/adminrejectedapplicants.component';
import { UserallapplicationsComponent } from './userallapplications/userallapplications.component';
import { UserapprovedapplicationsComponent } from './userapprovedapplications/userapprovedapplications.component';
import { UserrejectedapplicationsComponent } from './userrejectedapplications/userrejectedapplications.component';
import { EmischedulerComponent } from './emischeduler/emischeduler.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UseridComponent } from './userid/userid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    EmicalculatorComponent,
    ApplyloanComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    ApprovedloanComponent,
    LoandetailsComponent,
    CheckeligibilityComponent,
    CarmakeComponent,
    AddvehicleComponent,
    AddloanComponent,
    VehiclespecificationComponent,
    VehiclemakeComponent,
    PersonaldetailsComponent,
    DocumentsComponent,
    EmploymentdetailsComponent,
    AdminapplicantsComponent,
    AdminrejectedapplicantsComponent,
    UserallapplicationsComponent,
    UserapprovedapplicationsComponent,
    UserrejectedapplicationsComponent,
    EmischedulerComponent,
    ForgotpasswordComponent,
    UseridComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    AppRoutingModule,
    HighchartsChartModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginheaderComponent } from './commonComponent/loginheader/loginheader.component';
import { LoginfooterComponent } from './commonComponent/loginfooter/loginfooter.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    LoginheaderComponent,
    LoginfooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OutermoduleModule { }

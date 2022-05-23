import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './inner-component/example/example.component';
import { InnerComponentComponent } from './inner-component/inner-component.component';
import { OverviewComponent } from './inner-component/overview/overview.component';
import { ProfileComponent } from './inner-component/profile/profile.component';
import { UserdetailsComponent } from './inner-component/userdetails/userdetails.component';
import { ForgotpasswordComponent } from './outer-component/forgotpassword/forgotpassword.component';
import { LoginComponent } from './outer-component/login/login.component';
import { OuterComponentComponent } from './outer-component/outer-component.component';
import { SignupComponent } from './outer-component/signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ActiveuserComponent } from './inner-component/activeuser/activeuser.component';
import { InactiveuserComponent } from './inner-component/inactiveuser/inactiveuser.component';

const routes: Routes = [
  {
    path: '',
    component: OuterComponentComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'forgotpassword', component: ForgotpasswordComponent }
    ]
  },
  {
    path: '',
    component: InnerComponentComponent,
    children: [
      { path: '', redirectTo: 'Overview', pathMatch: 'full' },
      { path: 'Overview', component: OverviewComponent },
      { path: 'Profile', component: ProfileComponent },
      { path: 'Userdetails',
        children: [
          { path: '', component: UserdetailsComponent },
          { path: 'Activeuser', component: ActiveuserComponent },
          { path: 'Inactiveuser', component: InactiveuserComponent }
        ],
      },
      { path: 'Example', component: ExampleComponent }
    ]
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

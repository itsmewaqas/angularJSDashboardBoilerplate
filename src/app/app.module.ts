import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OuterComponentComponent } from './outer-component/outer-component.component';
import { InnerComponentComponent } from './inner-component/inner-component.component';
import { LoginheaderComponent } from './outer-component/commonComponent/loginheader/loginheader.component';
import { LoginfooterComponent } from './outer-component/commonComponent/loginfooter/loginfooter.component';
import { SidebarComponent } from './inner-component/sharedComponent/sidebar/sidebar.component';
import { HeaderComponent } from './inner-component/sharedComponent/header/header.component';
import { FooterComponent } from './inner-component/sharedComponent/footer/footer.component';
import { ExampleComponent } from './inner-component/example/example.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ActiveuserComponent } from './inner-component/activeuser/activeuser.component';
import { InactiveuserComponent } from './inner-component/inactiveuser/inactiveuser.component';
import { ApplicationServiesService } from './application-servies.service';
import { UserdetailsComponent } from './inner-component/userdetails/userdetails.component';
import { SignupComponent } from './outer-component/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    OuterComponentComponent,
    InnerComponentComponent,
    LoginheaderComponent,
    LoginfooterComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ExampleComponent,
    PagenotfoundComponent,
    ActiveuserComponent,
    InactiveuserComponent,
    UserdetailsComponent,
    SignupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [ApplicationServiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

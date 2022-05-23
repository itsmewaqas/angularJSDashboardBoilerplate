import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './sharedComponent/header/header.component';
import { SidebarComponent } from './sharedComponent/sidebar/sidebar.component';
import { FooterComponent } from './sharedComponent/footer/footer.component';
import { ExampleComponent } from './example/example.component';
import { ActiveuserComponent } from './activeuser/activeuser.component';
import { InactiveuserComponent } from './inactiveuser/inactiveuser.component';

@NgModule({
  declarations: [
    OverviewComponent,
    UserdetailsComponent,
    ProfileComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ExampleComponent,
    ActiveuserComponent,
    InactiveuserComponent
  ],
  imports: [
    CommonModule

  ]
})
export class InnermoduleModule { }

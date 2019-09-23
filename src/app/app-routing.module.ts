import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticsComponent } from './statistics/statistics.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { PasswordComponent } from './password/password.component';
import { RegisterComponent } from './register/register.component';
import { WorkComponent } from './work/work.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
  path: 'statistics',
  component: StatisticsComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'password',
    component: PasswordComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: 'blog-detail',
    component: BlogDetailComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

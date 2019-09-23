import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChartComponent } from './chart/chart.component';
import { BrandComponent } from './brand/brand.component';
import { PointComponent } from './point/point.component';
import { PricingComponent } from './pricing/pricing.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { PasswordComponent } from './password/password.component';
import { RegisterComponent } from './register/register.component';
import { WorkComponent } from './work/work.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Ng5SliderModule } from 'ng5-slider';
import { ArchwizardModule } from 'angular-archwizard';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,    
    NavbarComponent,
    ChartComponent,
    BrandComponent,
    PointComponent,
    PricingComponent,
    NewsletterComponent,
    StatisticsComponent,
    BlogComponent,
    LoginComponent,
    ContactComponent,
    PasswordComponent,
    RegisterComponent,
    WorkComponent,
    BlogDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    CarouselModule,
    Ng2GoogleChartsModule,
    Ng5SliderModule,
    ArchwizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}

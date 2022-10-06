import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './general/header/header.component';
import { FooterComponent } from './general/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LogoBrandingComponent } from './components/logo-branding/logo-branding.component';
import { WebsiteComponent } from './components/website/website.component';
import { VideoAnimationComponent } from './components/video-animation/video-animation.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SloganComponent } from './components/slogan/slogan.component';
import { IndustryComponent } from './components/industry/industry.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { LogoStyleComponent } from './components/logo-style/logo-style.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { FinalStepComponent } from './components/final-step/final-step.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TawkComponent } from './components/tawk/tawk.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LogoBrandingComponent,
    WebsiteComponent,
    VideoAnimationComponent,
    PortfolioComponent,
    PricingComponent,
    AboutUsComponent,
    ContactUsComponent,
    NotFoundComponent,
    SloganComponent,
    IndustryComponent,
    ColorPickerComponent,
    LogoStyleComponent,
    PersonalInformationComponent,
    FinalStepComponent,
    BlogComponent,
    TawkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

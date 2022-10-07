import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FinalStepComponent } from './components/final-step/final-step.component';
import { IndustryComponent } from './components/industry/industry.component';
import { LogoBrandingComponent } from './components/logo-branding/logo-branding.component';
import { LogoStyleComponent } from './components/logo-style/logo-style.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { SloganComponent } from './components/slogan/slogan.component';
import { VideoAnimationComponent } from './components/video-animation/video-animation.component';
import { WebsiteComponent } from './components/website/website.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'logo-branding',
    component:LogoBrandingComponent
  },
  {
    path:'web-design',
    component:WebsiteComponent
  },
  {
    path:'video-animation',
    component:VideoAnimationComponent
  },
  {
    path:'portfolio',
    component:PortfolioComponent
  },
  {
    path:'pricing',
    component:PricingComponent
  },
  {
    path:'payments',
    component:PaymentsComponent
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'slogan',
    component:SloganComponent
  },
  {
    path:'industry',
    component:IndustryComponent
  },
  {
    path:'color-picker',
    component:ColorPickerComponent
  },
  {
    path:'logo-style',
    component:LogoStyleComponent
  },
  {
    path:'personal-information',
    component:PersonalInformationComponent
  },
  {
    path:'final-step',
    component:FinalStepComponent
  },
  {
    path:'about-us',
    component:AboutUsComponent
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

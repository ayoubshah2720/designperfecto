import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/_service/api-service.service';

@Component({
  selector: 'app-logo-style',
  templateUrl: './logo-style.component.html',
  styleUrls: ['./logo-style.component.scss']
})
export class LogoStyleComponent implements OnInit {
  logoPreference: any;

  constructor(
    private apiService : ApiServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.apiService.getSharedData().subscribe(res=>{
      console.log('logo style',res)
    })

    this.getPreferences()
  }

  getPreferences(){
    this.apiService.getPreferenceList().subscribe(res => {
      console.log('response',res)
      this.logoPreference = res
    })
  }
  getLogoStyle(id:any){
    if(this.apiService.sharedData.type_and_preferences.length){
      let index = this.apiService.sharedData.type_and_preferences.findIndex((item:any) => item.id == id)
      if(index == -1){
        this.apiService.sharedData.type_and_preferences.push(id)
      } else {
        this.apiService.sharedData.type_and_preferences.splice(index, 1);
      }
    } else {
      this.apiService.sharedData.type_and_preferences.push(id)
    }
    this.apiService.setSharedData(this.apiService.sharedData)
  }
  submitSlogan(){
    this.router.navigateByUrl('/personal-information');
  }

}

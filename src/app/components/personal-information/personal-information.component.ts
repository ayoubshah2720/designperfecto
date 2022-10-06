import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/_service/api-service.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
  userForm = new FormGroup({
    cus_name: new FormControl(''),
    cus_email: new FormControl('')
  }); 
  
  mainData: any;

  constructor(
    private apiService : ApiServiceService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.mainData = this.apiService.sharedData
  }
  
  createLogo(){
    if(this.mainData){
      this.mainData.user_name = this.userForm.value.cus_name
      this.mainData.email = this.userForm.value.cus_email
      this.apiService.create(this.mainData).subscribe(res => {
        console.log('this.mainData',this.mainData)
        if(res){
          this.router.navigateByUrl('/final-step');
        }
      })
    }
  }

}

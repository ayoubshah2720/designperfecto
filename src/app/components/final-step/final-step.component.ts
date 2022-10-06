import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/_service/api-service.service';

@Component({
  selector: 'app-final-step',
  templateUrl: './final-step.component.html',
  styleUrls: ['./final-step.component.scss']
})
export class FinalStepComponent implements OnInit {

  constructor(
    private apiService : ApiServiceService,
  ) { }

  ngOnInit(): void {

  }

  createLogo(){
    let data = {
    business_name: 'Shahg_Online',
    email: 'Shahg_Online@gmail.com',
    user_name: 'Ayoub Shah',
    slogan: 'Your Dreams Our Promise',
    industry: [],
    color_tone: [],
    type_and_preferences: []
    }
    this.apiService.create(data).subscribe(res => {
      console.log('response',res)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/_service/api-service.service';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.scss']
})
export class IndustryComponent implements OnInit {
  industries: any;
  mainData: any;
  color_tone: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiService : ApiServiceService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
        .subscribe(params => {
          console.log('industry',params);
          this.apiService.sharedData.business_name = params.cname;
          this.apiService.sharedData.slogan = params.sname;
          console.log('this.apiService.sharedDataindustry',this.apiService.sharedData);

        }
      );
      this.getIndustries()
  }

  getIndustries(){
    this.apiService.getIndustriesList().subscribe(res => {
      console.log('response',res)
      this.industries = res
    })
   }

  getIndustry(id:any){
    console.log('preference this.mainData',this.mainData)
    if(this.apiService.sharedData.industry.length){
      let index = this.apiService.sharedData.industry.findIndex((item:any) => item == id)
      if(index == -1){
        this.apiService.sharedData.industry.push(id)
      } else {
        this.apiService.sharedData.industry.splice(index, 1);
      }
    } else {
      this.apiService.sharedData.industry.push(id)
    }
    this.apiService.setSharedData(this.apiService.sharedData)
  }

  submitSlogan(){
    this.router.navigateByUrl('/color-picker');
  }
  
}

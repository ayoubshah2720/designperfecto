import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/_service/api-service.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  colors: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiService : ApiServiceService,
  ) { }

  ngOnInit(): void {
    this.apiService.getSharedData().subscribe(res=>{
      console.log('get colors data',res)
    })

    this.getColors()
  }

  getColors(){
    this.apiService.getColorsList().subscribe(res => {
      console.log('response',res)
      this.colors = res
    })
  }

  getColor(id:any){
    if(this.apiService.sharedData.color_tone.length){
      let index = this.apiService.sharedData.color_tone.findIndex((item:any) => item.id == id)
      if(index == -1){
        this.apiService.sharedData.color_tone.push(id)
      } else {
        this.apiService.sharedData.color_tone.splice(index, 1);
      }
    } else {
      this.apiService.sharedData.color_tone.push(id)
    }
    this.apiService.setSharedData(this.apiService.sharedData)
  }

  submitSlogan(){
    // console.log('slogan Data',this.userForm.value)
    this.router.navigateByUrl('/logo-style');
  }
}

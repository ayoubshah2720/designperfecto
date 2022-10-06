import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/_service/api-service.service';

@Component({
  selector: 'app-slogan',
  templateUrl: './slogan.component.html',
  styleUrls: ['./slogan.component.scss']
})
export class SloganComponent implements OnInit {

  userForm = new FormGroup({
    cname: new FormControl(''),
    sname: new FormControl('')
  }); 
  businessName: any;
  mainData : any;

  constructor(
    private apiService : ApiServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
      this.activatedRoute.queryParams
        .subscribe(params => {
          console.log('params',params);
          this.businessName = params.businessName
          this.userForm.patchValue({
            cname: this.businessName,
          }); 
        }
      );
  }

  submitSlogan(){
    this.router.navigate(
      ['/industry'],
      { queryParams: 
        { 
          cname: this.userForm.value.cname,
          sname: this.userForm.value.sname
        } }
      );

  }
}

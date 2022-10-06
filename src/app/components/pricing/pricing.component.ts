import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/_service/api-service.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  products: any;

  constructor(
    private apiService : ApiServiceService,
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.apiService.getProductsList().subscribe(res => {
      console.log('response',res)
      this.products = res;
    })
  }
}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CreateLogoItem } from './create-logo.interface';

export  interface mainPayload {
  business_name: string,
    email: string,
    user_name: string,
    slogan: string,
    industry: number[],
    color_tone: number[],
    type_and_preferences: number[],
}
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  apiBaseUrl = 'http://127.0.0.1:8000/'

  sharedData: mainPayload = {
    business_name: '',
    email: '',
    user_name: '',
    slogan: '',
    industry: [],
    color_tone: [],
    type_and_preferences: []
    }
    sharedDataValue = new Subject<any>();
  constructor(
    private httpClient: HttpClient,
    
  ) { }

  getColorsList(): Observable<any> {
    return this.httpClient.get<any>(this.apiBaseUrl+'color-tones/');
  }

  getPreferenceList(): Observable<any> {
    return this.httpClient.get<any>(this.apiBaseUrl+'type-and-preferences/');
  }

  getProductsList(): Observable<any> {
    return this.httpClient.get<any>(this.apiBaseUrl+'products/');
  }

  getIndustriesList(): Observable<any> {
    return this.httpClient.get<any>(this.apiBaseUrl+'industries/');
  }

  // getListSearch(data: any): Observable<any> {
  //   let params = (new URLSearchParams({search: data})).toString();
  //   return this.httpClient.get<any>('booking/search?'+ params);
  // }

  create(data: any): Observable<any> {
    return this.httpClient.post(this.apiBaseUrl+'create-logo/', data);
  }

  // updateBooking(data: any, id: any): Observable<any> {
  //   return this.httpClient.put('booking/update/' + id, data);
  // }

  public setSharedData(value:any){
    this.sharedDataValue.next(value);
  }

  public getSharedData(): Observable<any>{
    return this.sharedDataValue.asObservable();
  }

}

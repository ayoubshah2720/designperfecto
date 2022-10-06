import { Observable } from 'rxjs';

export interface CreateLogo {
    business_name: string,
    email: string,
    user_name: string,
    slogan: string,
    industry: [],
    color_tone: [],
    type_and_preferences: []
}

export type CreateLogoItem = CreateLogo[];

export interface SaveResult {
  id: any;
}

export interface BookingInterface {
  getList(): Observable<CreateLogoItem>;
  getListSearch(data: any): Observable<CreateLogoItem>;
  create(data: any):Observable<SaveResult>;
  updateBooking(data: any, id: any): Observable<SaveResult>;
}

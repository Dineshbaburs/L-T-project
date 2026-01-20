import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel.model';

@Injectable({ providedIn: 'root' })
export class HotelService {
  private url = 'assets/data/hotels.json';
  constructor(private http: HttpClient) {}
  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.url);
  }
}

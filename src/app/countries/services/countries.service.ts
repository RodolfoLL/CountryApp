import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/Country';

@Injectable({ providedIn: 'root' })
export class ServiceCountries {
  private apiUrl: String = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) {}
  searchCapital(capital: string):Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/capital/${capital}`)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/Country';

@Injectable({ providedIn: 'root' })
export class ServiceCountries {
  private apiUrl: String = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) {}
  searchCapital(capital: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/capital/${capital}`)
      .pipe(catchError(() => of([])));
  }
  searchRegion(region: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/region/${region}`)
      .pipe(catchError(() => of([])));
  }
  searchCountry(name: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/name/${name}`)
      .pipe(catchError(() => of([])));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/Country';

@Injectable({ providedIn: 'root' })
export class ServiceCountries {
  private apiUrl: String = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) {}

  private getCountries(url: string): Observable<Country[]> {
    const searchCountry = this.http
      .get<Country[]>(url)
      .pipe(catchError(() => of([])),
      delay(2000))
      ;
    return searchCountry;
  }
  searchCapital(capital: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${capital}`;
    return this.getCountries(url);
  }
  searchRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.getCountries(url);
  }
  searchCountry(name: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${name}`;
    return this.getCountries(url);
  }
  searchByAlphaCode(code: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null)),
      delay(500)
    );
  }
}

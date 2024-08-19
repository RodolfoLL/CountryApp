import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';

import { Country } from '../interfaces/Country';
import { CacheStore } from '../interfaces/cache-countries.interface';
import { region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class ServiceCountries {
  private apiUrl: String = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  };
  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  private savedLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }
  private loadLocalStorage() {
    if (!localStorage.getItem('cacheStore')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }
  private getCountries(url: string): Observable<Country[]> {
    const searchCountry = this.http.get<Country[]>(url).pipe(
      catchError(() => of([]))
      // delay(2000))
    );

    return searchCountry;
  }
  searchCapital(capital: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${capital}`;
    return this.getCountries(url).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byCapital = { term: capital, countries })
      ),
      tap(() => this.savedLocalStorage())
    );
  }
  searchRegion(region: region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.getCountries(url).pipe(
      tap((countries) => (this.cacheStore.byRegion = { region, countries })),
      tap(() => this.savedLocalStorage())
    );
  }
  searchCountry(name: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${name}`;
    return this.getCountries(url).pipe(
      tap(
        (countries) => (this.cacheStore.byCountry = { term: name, countries }),
      ),
      tap(() => this.savedLocalStorage())
    );
  }
  searchByAlphaCode(code: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null)),
      delay(500)
    );
  }
}

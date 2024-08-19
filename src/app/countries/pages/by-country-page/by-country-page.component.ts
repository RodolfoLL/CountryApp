import { Component, OnInit } from '@angular/core';
import { ServiceCountries } from '../../services/countries.service';
import { Country } from '../../interfaces/Country';
@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css'],
})
export class ByCountryPageComponent implements OnInit {
  public countryByName: Country[] = [];
  public isLoading: boolean = false;
  public initialValueCountry: string = '';
  constructor(private ServiceCountries: ServiceCountries) {}
  ngOnInit(): void {
    this.countryByName = this.ServiceCountries.cacheStore.byCountry.countries;
    this.initialValueCountry = this.ServiceCountries.cacheStore.byCountry.term;
  }

  searchValue(value: string) {
    this.isLoading = true;

    this.ServiceCountries.searchCountry(value).subscribe((data) => {
      this.countryByName = data;
      this.isLoading = false;
    });
  }
}

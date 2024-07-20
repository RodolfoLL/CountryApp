import { Component } from '@angular/core';
import { ServiceCountries } from '../../services/countries.service';
import { Country } from '../../interfaces/Country';
@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css'],
})
export class ByCountryPageComponent {
  public countryByName: Country[] = [];
  constructor(private ServiceCountries: ServiceCountries) {}
  searchValue(value: string) {
    this.ServiceCountries.searchCountry(value).subscribe(
      (data) => (this.countryByName = data)
    );
  }
}

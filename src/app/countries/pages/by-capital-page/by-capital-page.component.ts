import { Country } from '../../interfaces/Country';
import { ServiceCountries } from './../../services/countries.service';
import { Component } from '@angular/core';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css'],
})
export class ByCapitalPageComponent {
  public countriesByCapital: Country[] = [];
  public isLoading: boolean = false;
  constructor(private ServiceCountries: ServiceCountries) {}
  searchValue(value: string) {
    this.isLoading = true;
    this.ServiceCountries.searchCapital(value).subscribe(
      (data) => ((this.countriesByCapital = data), (this.isLoading = false))
    );
  }
}

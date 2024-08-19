import { Country } from '../../interfaces/Country';
import { ServiceCountries } from './../../services/countries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css'],
})
export class ByCapitalPageComponent implements OnInit {
  public countriesByCapital: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private ServiceCountries: ServiceCountries) {}
  ngOnInit(): void {
    this.countriesByCapital =
      this.ServiceCountries.cacheStore.byCapital.countries;
    this.initialValue = this.ServiceCountries.cacheStore.byCapital.term;
  }
  searchValue(value: string) {
    this.isLoading = true;
    this.ServiceCountries.searchCapital(value).subscribe(
      (data) => ((this.countriesByCapital = data), (this.isLoading = false))
    );
  }
}

import { Component } from '@angular/core';
import { ServiceCountries } from '../../services/countries.service';
import { Country } from '../../interfaces/Country';
@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css'],
})
export class ByRegionPageComponent {
  public countriesByRegion: Country[] = [];
  public isLoading: boolean = false;
  constructor(private ServiceCountries: ServiceCountries) {}
  public searchValue(value: string) {
    this.isLoading = true;
    this.ServiceCountries.searchRegion(value).subscribe((data) => {
      this.countriesByRegion = data;
      this.isLoading = false;
    });
  }
}

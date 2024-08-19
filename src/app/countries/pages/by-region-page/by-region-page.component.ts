import { Component, OnInit } from '@angular/core';
import { ServiceCountries } from '../../services/countries.service';
import { Country } from '../../interfaces/Country';
import { region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css'],
})
export class ByRegionPageComponent implements OnInit {
  public countriesByRegion: Country[] = [];
  public isLoading: boolean = false;
  public regions: region[] = [
    'Americas',
    'Africa',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selectedRegion?: region;

  constructor(private ServiceCountries: ServiceCountries) {}
  ngOnInit(): void {
    this.countriesByRegion =
      this.ServiceCountries.cacheStore.byRegion.countries;
    this.selectedRegion = this.ServiceCountries.cacheStore.byRegion.region;
  }
  public searchValue(value: region) {
    this.selectedRegion = value;
    this.isLoading = true;
    this.ServiceCountries.searchRegion(value).subscribe((data) => {
      this.countriesByRegion = data;
      this.isLoading = false;
    });
  }
}

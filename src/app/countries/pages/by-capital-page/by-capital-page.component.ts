import { Country } from '../../interfaces/Country';
import { ServiceCountries } from './../../services/countries.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {
  public countriesByCapital : Country[] = [];
  constructor(private ServiceCountries:ServiceCountries){

  }
  searchValue(value:string){

    this.ServiceCountries.searchCapital(value).subscribe((data) => this.countriesByCapital = data);
  };

}

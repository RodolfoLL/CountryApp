import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'countries-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent {
  @Input()
  public countries:Country[] = [];
  @Input()
  public region: boolean = false;
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceCountries } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country, Languages } from '../../interfaces/Country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css'],
})
export class CountryPageComponent implements OnInit {
  public country:Country | null = null;
  public languages: Languages | undefined ;
  public vector : string[] = [];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private ServiceCountries: ServiceCountries,
    private route:Router,

  ) {
    this.languages ={};
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({id})=> this.ServiceCountries.searchByAlphaCode(id))
    ).subscribe( country =>{
      if (!country) {
        this.route.navigateByUrl('')
      }
      this.country = country;
      console.log(country)
      this.languages = this.country?.languages;
      this.vector = Object.values(this.languages!)

      console.log(this.vector)
    }
    );
  }
}

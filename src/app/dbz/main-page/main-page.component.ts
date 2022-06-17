import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  new: Character = {
    nameC: '',
    power: 0
  }
  
  constructor( public dbzService: DbzService ) {}

}

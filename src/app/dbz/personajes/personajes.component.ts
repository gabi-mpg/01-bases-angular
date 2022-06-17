import { Component, Input, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})

export class PersonajesComponent{
  // @Input() characters: any[] = [];
  get characters(){
    return this.dbzService.characters;
  }

  constructor ( private dbzService: DbzService ) {}
}

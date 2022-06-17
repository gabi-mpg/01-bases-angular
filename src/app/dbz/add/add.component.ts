import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})

export class AddComponent {
  @Input() characters: Character[] = [];

  @Input() new: Character = {
    nameC: '',
    power: 0
  }

  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  addNewCharacter(){
    if(this.new.nameC.trim().length > 0){
      // this.onNewCharacter.emit( this.new );

      this.dbzService.addNewCharacter ( this.new );

      this.new = { nameC: '', power: 0};
    }
  }

  constructor ( private dbzService: DbzService ) {}
}

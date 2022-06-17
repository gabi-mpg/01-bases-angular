import { Injectable } from "@angular/core";
import { Character } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService{

    private _characters: Character[] = [
        {
          nameC: 'Goku',
          power: 15000
        },
        {
          nameC: 'Vegeta',
          power: 7500
        }
      ]

    get characters() :Character[]{
        return [...this._characters];
    }

    addNewCharacter( args: Character ){
        this._characters.push(args);
    }
    
    constructor() {}
    
}
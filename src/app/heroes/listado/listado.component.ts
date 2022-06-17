import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

    heroes: string[] = ['Spiderman', 'Doctor Strange', 'Hulk', 'Black Widow'];
    deletedHeroes: string[] = [];
    
    deleteHeroe() {
        const deletedHeroe = this.heroes.pop();
        if(deletedHeroe){
          this.deletedHeroes.push(deletedHeroe);
        }
    } 
}

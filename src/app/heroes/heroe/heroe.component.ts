import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    name: string = 'Ironman';
    age: number = 45;

    get upperCaseName(){
        return this.name.toUpperCase();
    }

    obtainInfo(): string {
        return `${this.name} - ${this.age}`;
    }

    changeName(): string {
        return this.name = 'Spiderman';
    }
    
    changeAge(): number {
        return this.age = 25;
    }
}
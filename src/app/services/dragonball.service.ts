import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = ():Character[] => {
    const characters = localStorage.getItem('characters');
    if(characters){
        return characters ? JSON.parse(characters) : [];
    }
    else{
        return [
            
        ]; 

    }
}

@Injectable({providedIn: 'root'})
export class DragonBallService {
    // constructor() { }
    characters=signal<Character[]>(
        // [
        // { id: 1, name: 'Goku', power: 9001 },
        // { id: 2, name: 'Vegeta', power: 8000 },
        // ]
        loadFromLocalStorage()
        );
    
      saveToLocalStorage=effect(()=>{
        localStorage.setItem('characters', JSON.stringify(this.characters()));  
        }
        );
      // nombrePersonaje=signal('');
      // poderPersonaje=signal(0);
      insertCharacter(nuevoPersonaje:Character) {
        console.log('nuevoPersonaje',nuevoPersonaje);
        this.characters.update((prev) => [...prev, nuevoPersonaje]);
        
            
      }
}
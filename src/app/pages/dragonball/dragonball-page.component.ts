import { NgClass } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Component, computed, inject, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [NgClass],
  templateUrl: './dragonball-page.component.html',
 
})

export class DragonballPageComponent {
  // constructor(private algo: ToastrService) {}
  toastr=inject(ToastrService);
  characters=signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 3, name: 'Piccolo', power: 3000 },
    { id: 4, name: 'Yamcha', power: 500 },
  
  ]);
  nombrePersonaje=signal('');
  poderPersonaje=signal(0);
  addCharacter() {
    let mensaje:string='';
    if(this.nombrePersonaje().length===0){ 
      mensaje+='El nombre del personaje  no debe estar vacio!<br>';
    }
    if(this.poderPersonaje()==0){ 
      mensaje+='El poder del personaje  no debe ser 0<br>';
    }

    if(mensaje.length>0){
      this.toastr.error(mensaje,'Error!',
        {
          disableTimeOut: true,
          tapToDismiss: false,
          //toastClass: "toast border-yellow",
          closeButton: true,
          enableHtml:true
          //positionClass:'bottom-left'
        }

      );
    }
    else{
      const newCharacter: Character = {
        id: this.characters().length + 1,
        name:this.nombrePersonaje() ,
        power: this.poderPersonaje(),
      };
      this.characters.update((prev) => [...prev, newCharacter]);
      this.toastr.success('Personaje Registrado satisfactoriamente', 'Registrado!'); 
      this.resetForm();
    } 
   
  }
  resetForm() {
    this.nombrePersonaje.set('');
    this.poderPersonaje.set(0);
    //this.toastr.clear();
  }
   
}



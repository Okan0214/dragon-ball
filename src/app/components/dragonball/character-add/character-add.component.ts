import { ChangeDetectionStrategy, Component, signal,inject, output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import  type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAddComponent {
  nombrePersonaje=signal('');
  poderPersonaje=signal(0);
  newCharacter=output<Character>();
  toastr=inject(ToastrService);
  addCharacter() {
    //console.log('personajeAdd',personajeAdd);
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
          disableTimeOut: false,
          tapToDismiss: false,
          //toastClass: "toast border-yellow",
          closeButton: true,
          enableHtml:true,
          timeOut: 25000 ,
          progressBar: true,
          progressAnimation: 'increasing',
          //positionClass:'bottom-left'
        }

      );
    }
    else{
      const newCharacter: Character = {
        id: Math.floor(Math.random() * 1000),
        name:this.nombrePersonaje() ,
        power: this.poderPersonaje(),
      };
      this.newCharacter.emit(newCharacter);
      //console.log({newCharacter});
      // this.characters.update((prev) => [...prev, newCharacter]);
      // this.toastr.success('Personaje Registrado satisfactoriamente', 'Registrado!'); 
      this.resetForm();
    } 
   
  }
  resetForm() {
    this.nombrePersonaje.set('');
    this.poderPersonaje.set(0);
    this.toastr.clear();
  }
}

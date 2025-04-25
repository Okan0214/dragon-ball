import { Component,signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-page',
  imports: [CommonModule],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {
  name=signal('Ironman');
  age=signal(45);
  heroDescription=computed(()=>{
    const description=`${this.name()} - ${this.age()}`;
    return description
  });
  capitalizeName=computed(()=>{
    return this.name().toUpperCase();
  }
  );
changeHero(){
  this.name.set('Spiderman');
  this.age.set(22);
  
}
resetForm(){
  this.name.set('Ironman');
  this.age.set(45);
  
}
changeAge(){
  this.age.set(60);
}
}

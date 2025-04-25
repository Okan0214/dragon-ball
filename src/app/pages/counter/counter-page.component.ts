import { ChangeDetectionStrategy, Component, signal } from "@angular/core";


@Component({
//selector: "app-counter-page", 
styleUrls: ["./counter-page.component.css"],
templateUrl: "./counter-page.component.html",
//imports: [DecreasePageComponent, ReserPageComponent],
changeDetection: ChangeDetectionStrategy.OnPush,
})
  
export class CounterPageComponent {
  counter: number = 10;
  counterSignal=signal(10)

  constructor() {
    setInterval(() => { 
      //this.increaseBy(1);
      //this.counter+=1;
      this.counterSignal.update((v) => v + 1);
      console.log('Tick');
    }
    , 2000);
  }

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update((prev) => prev + value);
  }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }

  
}
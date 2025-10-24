import { NgStyle } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [NgStyle],
  templateUrl: './signal.html',
  styleUrl: './signal.css'
})
export class Signal {
  count = signal(10);
  color: string = "olivia";


  constructor() {
    effect(() => {

      switch (this.count()) {
        case 11:
          this.color = 'red'
          break
        case 12:
          this.color = 'blue'
          break
        case 13:
          this.color = 'orange'
          break
        case 14:
          this.color = 'black'
          break

      }
      console.log("singnal value", this.count())
    })
  }

  onClickSignal() {
    this.count.set(this.count() + 1);
  }

}

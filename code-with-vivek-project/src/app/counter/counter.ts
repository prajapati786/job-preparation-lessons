import { CommonModule } from '@angular/common';
import { Component, effect, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  counter: number = 0
  color: string = ''
  UserList = ["Vivek", "Fenil", "Badal", "Dhaval", "Vinay", "Tejash"]
  // UserList = []

  constructor() {
  }

  DeCrease() {
    if (this.counter) {
      this.counter -= 1
    }
    // this.signal.set(100)
  }
  Color(color: string) {
    this.color = color
  }
  Reset() {
    this.counter = 0
  }
  InCrease() {
    debugger
    this.counter += 1
  }

}

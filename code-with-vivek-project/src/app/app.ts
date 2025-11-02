import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Header } from "./header/header";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('code-with-vivek-project');

  user = "Vivek"
  selectedvalue: string = ''
  users: string[] = []

  handleUser(users: string[]) {
    debugger
    console.log(users)
    this.users = users
  }

}

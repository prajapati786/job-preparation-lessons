import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {

  ngOnInit(): void {

  }

  onClickEmit() {
    this.getUser.emit(this.userList)
  }

  @Input() user: string = ''


  @Output() getUser = new EventEmitter()
  userList: string[] = ["Vivek", "Fenil", "Vihar", "Dilip", "Jay"]


}

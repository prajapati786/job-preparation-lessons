import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList {

  userList: { id: number, task: string }[] = []
  task: string = ''


  addTask() {
    this.userList.push({ id: this.userList.length + 1, task: this.task })
    this.task = ''
  }
  DeleteUser(id: number) {
    this.userList = this.userList.filter((u) => u.id != id)
  }
}

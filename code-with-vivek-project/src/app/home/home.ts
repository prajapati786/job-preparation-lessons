import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  userList = [
    { id: 1, name: 'vivek', age: '23' },
    { id: 2, name: 'fenil', age: '25' },
    { id: 3, name: 'badal', age: '24' },
    { id: 4, name: 'dhaval', age: '26' }
  ]




}

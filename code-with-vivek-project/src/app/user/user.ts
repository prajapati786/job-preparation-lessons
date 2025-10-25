import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit {
  name: string | null = null;
  constructor(private router: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      debugger
      console.log(params)
      this.name = params['name']

    })
  }

}

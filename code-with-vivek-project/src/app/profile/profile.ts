import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {
  name: string | null = ""
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name')
  }



}

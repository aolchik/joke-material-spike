import { Component, OnInit } from '@angular/core';

import { Joke, JokeComponent } from '../joke/joke.component'

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  joke : Joke = new Joke('joke','punchline',true);

  constructor() { }

  ngOnInit() {
  }

}

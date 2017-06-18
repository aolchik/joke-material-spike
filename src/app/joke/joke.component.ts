import { Component, Input, OnInit } from '@angular/core';

export class Joke {
  joke: string;
  punchline: string;
  hide: boolean;

  constructor(joke: string, punchline: string, hide: boolean) {
    this.joke = joke;
  } 
}

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}

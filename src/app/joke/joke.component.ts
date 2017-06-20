import { Component, Input, OnInit } from '@angular/core';

export class Joke {
  constructor(public joke: string, public punchline: string, public hide: boolean) {
  } 
}

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  @Input('joke') joke: Joke;

  constructor() { }

  ngOnInit() {
  }

}

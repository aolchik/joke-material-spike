import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Joke } from '../joke/joke.component'

@Component({
  selector: 'joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {
  @Output() onAdd = new EventEmitter<Joke>();

  constructor() { }

  ngOnInit() {
  }

  addJoke(joke: string, punchline: string) {
    this.onAdd.emit(new Joke(joke, punchline, true));
  }

}

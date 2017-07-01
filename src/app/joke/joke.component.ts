import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export class Joke {
  constructor(
    public joke: string = '',
    public punchline: string = '',
    public hide: boolean = true) { }

  togglePunchline() : void {
    this.hide = !this.hide;
  } 
}

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  @Input() joke: Joke;
  @Output() onDelete = new EventEmitter<Joke>();

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.onDelete.emit(this.joke);
  }
}

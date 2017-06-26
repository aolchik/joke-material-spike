import { Component, OnInit } from '@angular/core';

import { Joke, JokeComponent } from '../joke/joke.component'

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  jokes : Joke[];

  constructor() {
    this.jokes = [
      new Joke(
        'O que fala o livro de Matemática para o livro de História?',
        'Não me venha com história que eu já estou cheio de problema!',
        true),
      new Joke('Qual o cachorro que é professor?','O cãolecionador.',true)
    ];
  }

  delete(joke) {
    let index : number = this.jokes.indexOf(joke);
    this.jokes.splice(index-1,1);
  }

  ngOnInit() { }
}

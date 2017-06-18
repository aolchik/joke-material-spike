import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { 
  MdButtonModule, 
  MdCardModule, 
  MdInputModule } from '@angular/material';
  
import { Joke, JokeComponent } from './joke.component';

describe('JokeComponent', () => {
  let component: JokeComponent;
  let fixture: ComponentFixture<JokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

describe('Joke', () => {
  it('assigns joke, punchline and hide', () => {
    let j = new Joke("joke", "punchline", true);
    expect(j.joke).toBe("joke");
  });
});

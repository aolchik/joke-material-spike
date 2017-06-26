import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdButtonModule, MdCardModule, MdInputModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";

import { Joke, JokeComponent } from '../joke/joke.component'
import { JokeFormComponent } from '../joke-form/joke-form.component'

import { JokeListComponent } from './joke-list.component';

describe('JokeListComponent', () => {
  let component: JokeListComponent;
  let fixture: ComponentFixture<JokeListComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        JokeComponent,
        JokeFormComponent,
        JokeListComponent 
      ],
      imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FlexLayoutModule,
        MdButtonModule,
        MdCardModule,
        MdInputModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('cria componente', () => {
    expect(component).toBeTruthy();
  });

  it('renderiza joke-form', () => {
    expect(compiled.querySelector('joke-form').textContent).not.toBe(null);
  });

  it('renderiza algumas piadas iniciais', () => {
    expect(compiled.querySelectorAll('joke').length).toBeGreaterThan(1);
  });

  describe('delete', () => {
    it('remove piada', () => {
      let joke : Joke = component.jokes[1];
      let size : number = component.jokes.length;
      component.delete(joke);
      expect(component.jokes.length).toBe(size - 1);
      expect(component.jokes.indexOf(joke)).toBe(0);
    });
  });
});

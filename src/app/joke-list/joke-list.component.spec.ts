import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdButtonModule, MdCardModule, MdInputModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";

import { Joke, JokeComponent } from '../joke/joke.component'
import { JokeFormComponent } from '../joke-form/joke-form.component'

import { JokeListComponent } from './joke-list.component';

import { clickButton } from '../../test_helper';

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

  it('suporta a remoção de piadas', () => {
    spyOn(component,'delete');
    clickButton(fixture, '.delete');
    expect(component.delete).toHaveBeenCalled();
  });

  it('suporta a adição de piadas', () => {
    spyOn(component,'add');
    clickButton(fixture, '.add');
    expect(component.add).toHaveBeenCalledWith(new Joke());
  });

  describe('delete', () => {
    it('remove piada', () => {
      let joke : Joke = component.jokes[1];
      let size : number = component.jokes.length;
      component.delete(joke);
      expect(component.jokes.length).toBe(size - 1);
      expect(component.jokes.indexOf(joke)).toBe(-1);
    });

    it('gera exceção se não for uma piada válida', () => {
      let joke : Joke = new Joke('inexistent joke','',true);
      expect( () => { component.delete(joke); } ).toThrow();
    });
  });

  describe('add', () => {
    it('adiciona piada', () => {
      let joke : Joke = new Joke('nova piada', 'remate', true);
      let size : number = component.jokes.length;
      expect(component.jokes.indexOf(joke)).toBe(-1);

      component.add(joke);
      expect(component.jokes.length).toBe(size + 1);
      expect(component.jokes.indexOf(joke)).toBeGreaterThanOrEqual(0);
    });
  });

});

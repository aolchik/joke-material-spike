import { 
  async, 
  ComponentFixture, 
  TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";

import { 
  MdButtonModule, 
  MdCardModule, 
  MdInputModule } from '@angular/material';

import { Joke } from '../joke/joke.component';
import { JokeFormComponent } from './joke-form.component';

import { clickButton } from '../../test_helper';

describe('JokeFormComponent', () => {
  let component: JokeFormComponent;
  let fixture: ComponentFixture<JokeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeFormComponent ],
      imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FlexLayoutModule,
        MdButtonModule,
        MdCardModule,
        MdInputModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('cria formulário', () => {
    expect(component).toBeTruthy();
  });

  it('dispara adição de piada', () => {
    pending();
    let setup : string = 'setup';
    let punchline : string = 'punchline';
    let joke : Joke = new Joke(setup, punchline, true);
    spyOn(component.onAdd,'emit');
    clickButton(fixture, '.add');
    expect(component.onAdd.emit).toHaveBeenCalledWith(joke);
  });

});

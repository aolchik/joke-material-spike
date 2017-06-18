import { TestBed, async } from '@angular/core/testing';

import { MdButtonModule, MdCardModule, MdInputModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { Joke, JokeComponent } from './joke/joke.component'
import { JokeFormComponent } from './joke-form/joke-form.component'
import { JokeListComponent } from './joke-list/joke-list.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
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
      ],
    }).compileComponents();
  }));

  it('creates the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`title is 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('renders joke-list', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('joke-list').textContent).not.toBe(null);
  }));
});

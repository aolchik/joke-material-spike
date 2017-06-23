import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { MdButtonModule, MdCardModule, MdInputModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { Joke, JokeComponent } from './joke/joke.component'
import { JokeFormComponent } from './joke-form/joke-form.component'
import { JokeListComponent } from './joke-list/joke-list.component'

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

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

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('cria aplicativo', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`título é 'app'`, async(() => {
    expect(app.title).toEqual('app');
  }));

  it('renderiza joke-list', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('joke-list').textContent).not.toBe(null);
  }));
});

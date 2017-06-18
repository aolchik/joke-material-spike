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

import { JokeFormComponent } from './joke-form.component';

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

  it('is created', () => {
    expect(component).toBeTruthy();
  });
});

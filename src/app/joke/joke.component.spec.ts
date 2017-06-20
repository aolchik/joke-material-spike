import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component } from '@angular/core';

import { 
  MdButtonModule, 
  MdCardModule, 
  MdInputModule } from '@angular/material';
  
import { Joke, JokeComponent } from './joke.component';

describe('JokeComponent', () => {
  let component: JokeComponent;
  let fixture: ComponentFixture<TestComponentWrapper>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        JokeComponent, 
        TestComponentWrapper 
      ],
      imports: [
        MdCardModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponentWrapper);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('is created', () => {
    expect(component).toBeTruthy();
  });

  it('shows joke', () => {
    expect(compiled.querySelector('h2').textContent).toBe("joke");
  });

  it('hides punchline', () => {
    let pe = compiled.querySelector('.punchline');
    expect(compiled.querySelector('.punchline')).not.toBe(null);
    expect(compiled.querySelector('.punchline').getAttribute('hidden')).not.toBe(null);
  });
});

describe('Joke', () => {
  it('assigns joke, punchline and hide', () => {
    let j = new Joke("joke", "punchline", true);
    expect(j.joke).toBe("joke");
    expect(j.punchline).toBe("punchline");
    expect(j.hide).toBe(true);
  });
});

@Component({
  selector: 'test-component-wrapper',
  template: '<joke [joke]="joke"></joke>'
})
class TestComponentWrapper {
  joke = new Joke("joke", "punchline", true)
}

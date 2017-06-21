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

  describe('construtor', () => {
    it('cria objeto', () => {
      expect(component).toBeTruthy();
    });

    it('mostra piada', () => {
      expect(compiled.querySelector('h2').textContent).toBe("piada");
    });

    it('mostra punchline', () => {
      expect(compiled.querySelector('.punchline').textContent).toBe("remate");
    });
  });

  describe('botão diga-me', () => {
    it('esconde e mostra remate', () => {
       pending();
    });
  });
});

describe('Joke', () => {
  describe('construtor', () => {
    it('atribui piada, remate and visualização padrão', () => {
      let j = new Joke("joke", "punchline", true);
      expect(j.joke).toBe("joke");
      expect(j.punchline).toBe("punchline");
      expect(j.hide).toBe(true);
    });
  });
});

@Component({
  selector: 'test-component-wrapper',
  template: '<joke [joke]="joke"></joke>'
})
class TestComponentWrapper {
  joke = new Joke("piada", "remate", true)
}

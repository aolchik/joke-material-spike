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
  let punchline: any;

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
    punchline = compiled.querySelector('.punchline');
  });

  describe('construtor', () => {
    it('cria objeto', () => {
      expect(component).toBeTruthy();
    });

    it('mostra piada', () => {
      expect(compiled.querySelector('h2').textContent).toBe("piada");
    });

    it('esconde punchline', () => {
      expect(punchline.textContent).toBe("remate");
      expect(punchline.getAttribute('hidden')).not.toBe(null);
    });
  });

  describe('botão diga-me', () => {
    it('esconde e mostra remate', () => {
      let tellMeButton = fixture.debugElement.nativeElement.querySelector('.tellme');
      tellMeButton.click();
      fixture.detectChanges();
      expect(punchline.getAttribute('hidden')).toBe(null);
    });
  });
});

describe('Joke', () => {
  let j: Joke;

  beforeEach(() => {
      j = new Joke("joke", "punchline", true);
  });

  describe('construtor', () => {
    it('atribui piada, remate and visualização padrão', () => {
      expect(j.joke).toBe("joke");
      expect(j.punchline).toBe("punchline");
      expect(j.hide).toBe(true);
    });
  });

  describe('togglePunchline', () => {
    it('inverte visualização', () => {
      j.togglePunchline();
      expect(j.hide).toBe(false);

      j.togglePunchline();
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

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Identificador } from './identificador';

describe('Identificador', () => {
  let component: Identificador;
  let fixture: ComponentFixture<Identificador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Identificador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Identificador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

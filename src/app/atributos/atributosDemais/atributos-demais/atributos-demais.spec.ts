import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributosDemais } from './atributos-demais';

describe('AtributosDemais', () => {
  let component: AtributosDemais;
  let fixture: ComponentFixture<AtributosDemais>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtributosDemais]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtributosDemais);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

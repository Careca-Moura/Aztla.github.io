import { TestBed } from '@angular/core/testing';

import { PropagaAtributos } from './propaga-atributos';

describe('PropagaAtributos', () => {
  let service: PropagaAtributos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropagaAtributos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

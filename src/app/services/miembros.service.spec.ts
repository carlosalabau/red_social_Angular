import { TestBed } from '@angular/core/testing';

import { MiembrosService } from './miembros.service';

describe('MiembrosService', () => {
  let service: MiembrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiembrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

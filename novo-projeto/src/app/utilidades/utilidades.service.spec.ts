/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UtilidadesService } from './utilidades.service';

describe('UtilidadesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilidadesService]
    });
  });

  it('should ...', inject([UtilidadesService], (service: UtilidadesService) => {
    expect(service).toBeTruthy();
  }));
});

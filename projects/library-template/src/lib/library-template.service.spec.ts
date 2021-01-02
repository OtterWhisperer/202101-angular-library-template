import { TestBed } from '@angular/core/testing';

import { LibraryTemplateService } from './library-template.service';

describe('LibraryTemplateService', () => {
  let service: LibraryTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

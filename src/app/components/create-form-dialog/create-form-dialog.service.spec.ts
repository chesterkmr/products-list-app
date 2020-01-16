import { TestBed } from '@angular/core/testing';

import { CreateFormDialogService } from './create-form-dialog.service';

describe('CreateFormDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateFormDialogService = TestBed.get(CreateFormDialogService);
    expect(service).toBeTruthy();
  });
});

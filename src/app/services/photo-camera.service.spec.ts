import { TestBed } from '@angular/core/testing';

import { PhotoCameraService } from './photo-camera.service';

describe('PhotoCameraService', () => {
  let service: PhotoCameraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoCameraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

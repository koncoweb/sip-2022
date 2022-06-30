import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BeritaService } from './berita.service';

describe('BeritaService', () => {
  let service: BeritaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BeritaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

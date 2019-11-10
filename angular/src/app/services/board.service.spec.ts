import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { BoardService } from './board.service';

describe('BoardService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    }).compileComponents()
  );

  it('should be created', () => {
    const service: BoardService = TestBed.get(BoardService);
    expect(service).toBeTruthy();
  });
});

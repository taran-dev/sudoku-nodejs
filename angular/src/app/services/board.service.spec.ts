import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { BoardService } from './board.service';
import { from } from 'rxjs';

describe("BoardService", () => {

  var boardService: BoardService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BoardService]
    }).compileComponents();

    var testBed = getTestBed();
    boardService = testBed.get(BoardService);
    httpMock = testBed.get(HttpTestingController);

  });

  it("should be created", () => {
    const service: BoardService = TestBed.get(BoardService);
    expect(service).toBeTruthy();
  });

  describe("Get Board from API", () => {

    let board: number[];
      board = [
        5, 9, 8, 6, 1, 3, 7, 2, 4,
        2, 1, 7, 4, 9, 8, 6, 3, 5,
        4, 6, 3, 7, 2, 5, 8, 9, 1,
        6, 7, 1, 3, 5, 2, 9, 4, 8,
        9, 4, 2, 8, 7, 6, 5, 1, 3,
        8, 3, 5, 1, 4, 9, 2, 6, 7,
        3, 2, 6, 5, 8, 4, 1, 7, 9,
        7, 5, 4, 9, 6, 1, 3, 8, 2,
        1, 8, 9, 2, 3, 7, 4, 5, 6
      ];

    let selectedLoc = {"row": undefined, "col": undefined};

    it("should return an Observable Array of integers for empty inputs", () => {
      
      var resultBoard: any;
      var selectedNum = undefined;

      boardService.getBoard(selectedNum, selectedLoc).subscribe(result => {
        resultBoard = result;
        expect(resultBoard).toBe(board);
      });

      const req = httpMock.expectOne({ method: 'GET', url: `${boardService.baseUrl}/sudoku/board?num=${selectedNum}&row=${selectedLoc.row}&col=${selectedLoc.col}`});
      req.flush(board);
      httpMock.verify();
      
    });
  
    it("should return an Observable Array of integers for selected number on board", () => {
      
      var resultBoard: any;
      var selectedNum = 7;
      selectedLoc.row = 1;
      selectedLoc.col = 2;

      boardService.getBoard(selectedNum, selectedLoc).subscribe(result => {
        resultBoard = result;
        expect(resultBoard).toBe(board);
      });

      const req = httpMock.expectOne({ method: 'GET', url: `${boardService.baseUrl}/sudoku/board?num=${selectedNum}&row=${selectedLoc.row}&col=${selectedLoc.col}`});
      req.flush(board);
      httpMock.verify();
      
    });

  });
  
 });

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BoardService } from './../../services/board.service';

import { BoardComponent } from './board.component';
import { from, Observable, Observer } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  let boardService: BoardService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ BoardService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    boardService = TestBed.get(BoardService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("Get Board from Service", () => {

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

    it("should return an array of integers", () => {
      
      spyOn(boardService, "getBoard").and.callFake(() => {
          return from([board]);
      });
      

    // spyOn(boardService, "getBoard").and.returnValue(
    //     Observable.create((observer: Observer<number[]>) => {
    //       observer.next(board);
    //       return observer;
    //     })
    //   );
      
      component.ngOnInit();
      
      var resultBoard = component.board1D;

      expect(resultBoard).toBe(board);

    });
  
    it("should convert a 1D array to a 2D array of integers", () => {
        
        let board1D = [
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

        let board2D = [
            [5, 9, 8, 6, 1, 3, 7, 2, 4],
            [2, 1, 7, 4, 9, 8, 6, 3, 5],
            [4, 6, 3, 7, 2, 5, 8, 9, 1],
            [6, 7, 1, 3, 5, 2, 9, 4, 8],
            [9, 4, 2, 8, 7, 6, 5, 1, 3],
            [8, 3, 5, 1, 4, 9, 2, 6, 7],
            [3, 2, 6, 5, 8, 4, 1, 7, 9],
            [7, 5, 4, 9, 6, 1, 3, 8, 2],
            [1, 8, 9, 2, 3, 7, 4, 5, 6]
          ];

        var resultBoard2D = component.create2DArray(board1D);

        expect(resultBoard2D).toEqual(board2D);
        
    });

  });

});

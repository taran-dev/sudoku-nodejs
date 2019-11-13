import { Component, OnInit } from '@angular/core';
import { BoardService } from './../../services/board.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  board: any = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  board1D: number[];

  ngOnInit() {
    var self = this;
    
    self.spinnerService.show();
    self.boardService.getBoard().subscribe(result => {
      self.spinnerService.hide();

      self.board1D = result;
      self.board = self.create2DArray(result);
    });
    
  }

  create2DArray(boardArr) {
    var self = this;

    var board2D = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    //Convert retrived array to a 2D Array
    var size = Math.sqrt(boardArr.length);

    var k = 0;
    for(var i=0; i<size; i++) {
      for(var j=0; j<size; j++){
        board2D[i][j] = boardArr[k];
        k++;
      }
    }

    return board2D;
  }

  constructor(
    private boardService: BoardService
    , private spinnerService: NgxSpinnerService) { }

}

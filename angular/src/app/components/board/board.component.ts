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
  selectedRowIndex: any;
  selectedColIndex: any;
  
  selectedLocation: {"row": number, "col": number};
  selectedNumber: number;

  toggleCell: boolean = false;
  
  ngOnInit() {
    var self = this;
    
    self.selectedLocation = {
      row: self.selectedRowIndex,
      col: self.selectedColIndex
    }

    self.refreshBoard();
    
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

  refreshBoard() {
    var self = this;
    
    self.spinnerService.show();

    self.boardService.getBoard(self.selectedNumber, self.selectedLocation).subscribe(result => {
      self.spinnerService.hide();

      self.board1D = result;
      self.board = self.create2DArray(result);
    });
    
  }

  highlightCell(i: number, j: number) {
    var self = this;
    
    if(self.selectedRowIndex == i && self.selectedColIndex == j)
    {
      if(self.toggleCell)
        return 'highlight';
      else
        return '';
    }

  }

  setRowCol(i: number, j: number, num: number) {
    var self = this;

    if(self.selectedRowIndex == i &&  self.selectedColIndex == j) {
      self.selectedNumber = undefined;
      self.toggleCell = false;

      self.selectedLocation.row = undefined;
      self.selectedLocation.col = undefined;
    }
    else
    {
      self.toggleCell = true;
      self.selectedRowIndex = i;
      self.selectedColIndex = j;
      self.selectedNumber = num;

      self.selectedLocation.row = self.selectedRowIndex;
      self.selectedLocation.col = self.selectedColIndex;
    }

  }

  constructor(
    private boardService: BoardService
    , private spinnerService: NgxSpinnerService) { }

}

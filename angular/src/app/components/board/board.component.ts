import { Component, OnInit } from '@angular/core';
import { BoardService } from './../../services/board.service';

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

  ngOnInit() {
    var self = this;
    
    self.boardService.getBoard().subscribe(result => {

      console.log("Recevied new 9x9 Solved Board");
      console.log(result);
      
      //Convert retrived array to a 2D Array
      var size = Math.sqrt(result.length);
      console.log(size);
      var k = 0;
      for(var i=0; i<size; i++) {
        for(var j=0; j<size; j++){
          self.board[i][j] = result[k];
          k++;
        }
      }
      
      console.log(self.board);
    });
    
  }

  constructor(private boardService: BoardService) { }

}

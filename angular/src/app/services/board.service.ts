import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

import config from '../../../config.json';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  baseUrl: string = config.apiBaseUrl; // URL to web api
  
  //Get Board Array from Server with Inputs
  getBoard(selectedNum, selectedLoc): Observable<Array<number>> {
    var self = this;
    return self.http.get<Array<number>>(self.baseUrl + "/sudoku/board?num=" + selectedNum + "&row=" + selectedLoc.row + "&col=" + selectedLoc.col);
  }

  constructor(private http: HttpClient) { }

}

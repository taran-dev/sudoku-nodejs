import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000'; // URL to web api

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  //Get Board Array from Server
  getBoard(): Observable<Array<number>> {
    var self = this;
    return self.http.get<Array<number>>(baseUrl + "/sudoku/board");
}

  constructor(private http: HttpClient) { }

}

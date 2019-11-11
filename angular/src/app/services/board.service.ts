import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  baseUrl: string = "http://localhost:3000"; // URL to web api

  //Get Board Array from Server
  getBoard(): Observable<Array<number>> {
    var self = this;
    return self.http.get<Array<number>>(self.baseUrl + "/sudoku/board");
}

  constructor(private http: HttpClient) { }

}

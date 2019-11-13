import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

import config from '../../../config.json';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  baseUrl: string = config.apiBaseUrl; // URL to web api

  //Get Board Array from Server
  getBoard(): Observable<Array<number>> {
    var self = this;
    return self.http.get<Array<number>>(self.baseUrl + "/sudoku/board");
  }

  constructor(private http: HttpClient) { }

}

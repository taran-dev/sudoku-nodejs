import { NgModule } from '@angular/core';
import { BoardRoutingModule } from './board-routing.module';

import { BoardService } from './../../services/board.service';
import { BoardComponent } from './board.component';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    BoardRoutingModule,
    CommonModule,
    NgxSpinnerModule
  ],
  providers: [BoardService],
  bootstrap: [BoardComponent]
})
export class BoardModule { }

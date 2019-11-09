import { NgModule } from '@angular/core';
import { BoardRoutingModule } from './board-routing.module';

import { BoardService } from './../../services/board.service';
import { BoardComponent } from './board.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    BoardRoutingModule,
    CommonModule
  ],
  providers: [BoardService],
  bootstrap: [BoardComponent]
})
export class BoardModule { }

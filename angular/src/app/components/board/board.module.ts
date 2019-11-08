import { NgModule } from '@angular/core';
import { BoardRoutingModule } from './board-routing.module';

import { BoardComponent } from './board.component';

@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    BoardRoutingModule
  ],
  providers: [],
  bootstrap: [BoardComponent]
})
export class BoardModule { }

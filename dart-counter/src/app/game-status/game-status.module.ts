import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameStatusRoutingModule } from './game-status-routing.module';
import { GameStatusComponent } from './game-status.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { GameInfoBarComponent } from './game-info-bar/game-info-bar.component';


@NgModule({
  declarations: [
    GameStatusComponent,
    PlayerInfoComponent,
    GameInfoBarComponent
  ],
  imports: [
    CommonModule,
    GameStatusRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ]
})
export class GameStatusModule { }

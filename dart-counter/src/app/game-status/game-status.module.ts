import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameStatusRoutingModule } from './game-status-routing.module';
import { GameStatusComponent } from './game-status.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { GameInfoBarComponent } from './game-info-bar/game-info-bar.component';
import { WinnerModalComponent } from './winner-modal/winner-modal.component';


@NgModule({
  declarations: [
    GameStatusComponent,
    PlayerInfoComponent,
    GameInfoBarComponent,
    WinnerModalComponent
  ],
  imports: [
    CommonModule,
    GameStatusRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GameStatusModule { }

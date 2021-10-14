import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameStatusComponent } from './game-status/game-status.component';
import { PlayerInfoComponent } from './game-status/player-info/player-info.component';
import { StatsComponent } from './game-status/player-info/stats/stats.component';
import { PointsComponent } from './game-status/player-info/points/points.component';
import { GameInfoHeaderComponent } from './game-status/game-info-header/game-info-header.component';
import { AppRoutingModule } from '../app-routing.module';
import { StoreModule } from '@ngrx/store';
import { gameConfigFeatureKey, configReducer } from '../store/reducer/game-config.reducer';
import { gameStatusFeatureKey, statusReducer } from '../store/reducer/game-status.reducer';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GameStatusComponent,
    PlayerInfoComponent,
    StatsComponent,
    PointsComponent,
    GameInfoHeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    StoreModule.forFeature(gameConfigFeatureKey, configReducer),
    StoreModule.forFeature(gameStatusFeatureKey, statusReducer),
    FormsModule
  ]
})
export class GameStatusModule { }

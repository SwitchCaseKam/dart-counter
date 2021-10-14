import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameConfigComponent } from './game-config/game-config.component';
import { LegsConfigFieldComponent } from './game-config/config-fields/legs-config-field/legs-config-field.component';
import { SetsConfigFieldComponent } from './game-config/config-fields/sets-config-field/sets-config-field.component';
import { PointsConfigFieldComponent } from './game-config/config-fields/points-config-field/points-config-field.component';
import { PlayersConfigFieldComponent } from './game-config/config-fields/players-config-field/players-config-field.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { gameConfigFeatureKey, configReducer } from '../store/reducer/game-config.reducer';
import { AppRoutingModule } from '../app-routing.module';
import { gameStatusFeatureKey, statusReducer } from '../store/reducer/game-status.reducer';

@NgModule({
  declarations: [
    GameConfigComponent,
    LegsConfigFieldComponent,
    SetsConfigFieldComponent,
    PointsConfigFieldComponent,
    PlayersConfigFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(gameConfigFeatureKey, configReducer),
    StoreModule.forFeature(gameStatusFeatureKey, statusReducer),
    AppRoutingModule
  ],
  exports: [
    GameConfigComponent
  ]
})
export class GameConfigModule { }

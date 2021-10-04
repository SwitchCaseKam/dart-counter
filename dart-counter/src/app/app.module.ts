import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameConfigurationComponent } from './components/game-configuration/game-configuration.component';
import { SetsFieldComponent } from './components/game-configuration/config-fields/sets-field/sets-field.component';
import { LegsFieldComponent } from './components/game-configuration/config-fields/legs-field/legs-field.component';
import { PlayersFieldComponent } from './components/game-configuration/config-fields/players-field/players-field.component';
import { GameModeFieldComponent } from './components/game-configuration/config-fields/game-mode-field/game-mode-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameStatusComponent } from './components/game-status/game-status.component';
import { PlayersGameInfoComponent } from './components/game-status/players-game-info/players-game-info.component';
import { PlayersGameStatsComponent } from './components/game-status/players-game-stats/players-game-stats.component';
import { AppRoutingModule } from './app-routing.module';
import { PlayerGameInfoComponent } from './components/game-status/player-game-info/player-game-info.component';

@NgModule({
  declarations: [
    AppComponent,
    GameConfigurationComponent,
    SetsFieldComponent,
    LegsFieldComponent,
    PlayersFieldComponent,
    GameModeFieldComponent,
    GameStatusComponent,
    PlayersGameInfoComponent,
    PlayersGameStatsComponent,
    PlayerGameInfoComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

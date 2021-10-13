import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { GameConfigModule } from './game-config/game-config.module';
import { AppRoutingModule } from './app-routing.module';
import { GameStatusModule } from './game-status/game-status.module';
import { EffectsModule } from '@ngrx/effects';
import { StateEffects } from './store/effects/state.effects';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    GameConfigModule,
    GameStatusModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
    EffectsModule.forRoot([StateEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

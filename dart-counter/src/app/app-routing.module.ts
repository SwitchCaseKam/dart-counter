import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GameConfigComponent } from './game-config/game-config/game-config.component';
import { GameStatusComponent } from './game-status/game-status/game-status.component';
import { GameStatusModule } from './game-status/game-status.module';
import { GameConfigModule } from './game-config/game-config.module';

const routes: Routes = [
  { path: 'game', component: GameStatusComponent },
  { path: '**', component: GameConfigComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
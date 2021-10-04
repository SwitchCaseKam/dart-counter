import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GameConfigurationComponent } from './components/game-configuration/game-configuration.component';
import { GameStatusComponent } from './components/game-status/game-status.component';

const routes: Routes = [
  { path: 'game', component: GameStatusComponent },
  { path: '**', component: GameConfigurationComponent }
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameStatusComponent } from './game-status.component';

const routes: Routes = [{ path: '', component: GameStatusComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameStatusRoutingModule { }

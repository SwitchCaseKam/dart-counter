import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'game-config', loadChildren: () => import('./game-config/game-config.module').then(m => m.GameConfigModule) },
  { path: 'game-status', loadChildren: () => import('./game-status/game-status.module').then(m => m.GameStatusModule) },
  { path: '**', redirectTo: 'game-config'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

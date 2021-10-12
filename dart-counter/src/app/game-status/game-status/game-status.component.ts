import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameConfigState } from 'src/app/store/reducer/game-config.reducer';

@Component({
  selector: 'app-game-status',
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.css']
})
export class GameStatusComponent implements OnInit, OnDestroy {

  private componentTag = '[GSC]';

  constructor(private store: Store<GameConfigState>) { }

  public ngOnInit(): void {

  }

  public ngOnDestroy(): void {

  }

}

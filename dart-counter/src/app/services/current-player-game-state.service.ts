import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentPlayerGameStateService {

  private currentPlayerName: string = '';
  private currentPlayerNameSubject = new BehaviorSubject<string>(this.currentPlayerName);
  
  constructor() { }

  public setCurrentPlayer(playerName: string): void {
    this.currentPlayerName = playerName;
    this.currentPlayerNameSubject.next(playerName);
  }

  public getCurrentPlayerName(): Observable<string> {
    return this.currentPlayerNameSubject;
  }
}

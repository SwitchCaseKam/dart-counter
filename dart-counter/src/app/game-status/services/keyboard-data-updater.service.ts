import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeyboardDataUpdaterService {

  private points: number = 0;
  private pointsSubject: Subject<number> = new Subject<number>(); 

  constructor() { }

  public setPoints(points: string): void {
    this.points = Number(points);
    this.pointsSubject.next(this.points);
  }

  public getPoints(): Observable<number> {
    return this.pointsSubject.asObservable();
  }
}

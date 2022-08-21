import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeyboardDataUpdaterService {

  private points: number = 0;
  private pointsSubject: Subject<number> = new Subject<number>(); 
  private shouldPassData: boolean = false;

  constructor() { }

  public setPoints(points: string): void {
    this.points = Number(points);
    this.pointsSubject.next(this.points);
  }

  public setPointsSubject(): void {
    // this.points = Number(points);
    this.pointsSubject.next(this.points);
  }

  public setPassData(passDataFlag: boolean): void {
    this.shouldPassData = passDataFlag;
  }

  public getPoints(): Observable<number> {
    return this.pointsSubject.asObservable();
  }

  public getShouldPassDataFlag(): boolean {
    return this.shouldPassData;
  }
}

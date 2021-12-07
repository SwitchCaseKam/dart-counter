import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {

  @Input() public name: string = '';
  @Input() public points: string = '';
  @Input() public sets: string = '';
  @Input() public legs: string = '';

  constructor() { }

  public ngOnInit(): void {

  }

  public updateCurrentPoints(scoredPoints: number): void {
    this.points = (Number(this.points) - scoredPoints).toString();
    console.log('this.currentPoints: ', this.points)
  }
}

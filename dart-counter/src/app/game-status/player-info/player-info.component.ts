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
  public currentPoints = 0;

  constructor() { }

  public ngOnInit(): void {
    console.log('currentPoints: ', this.currentPoints)
  }

}

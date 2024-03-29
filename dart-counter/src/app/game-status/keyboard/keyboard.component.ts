import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { KeyboardDataUpdaterService } from '../services/keyboard-data-updater.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  public currentPoints = '';

  public buttonNums = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    'CLR', '0', '>>'
  ];
  
  @Output()
  private passDataEvent = new EventEmitter()

  constructor(private keyboardDataUpdaterService: KeyboardDataUpdaterService) { }

  public ngOnInit(): void {
  }

  public clickButton(buttonNum: string): void {
    switch(buttonNum) {
      case 'CLR':
        this.currentPoints = this.currentPoints.slice(0, -1);
        break;
      case '>>':
        console.log('passed to store', this.currentPoints);
        this.keyboardDataUpdaterService.setPoints(this.currentPoints);
        this.currentPoints = '';
        break;
      default:
        this.currentPoints += buttonNum;
    }
  }
}

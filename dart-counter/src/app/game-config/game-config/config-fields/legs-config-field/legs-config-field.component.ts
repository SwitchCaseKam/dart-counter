import { Component, OnInit } from '@angular/core';
import { LegsField, LegsMode } from './legs-config.model';

@Component({
  selector: 'app-legs-config-field',
  templateUrl: './legs-config-field.component.html',
  styleUrls: ['./legs-config-field.component.css']
})
export class LegsConfigFieldComponent implements OnInit {

  public legsMode: LegsField[] = [];

  constructor() { }

  public ngOnInit(): void {
    for (let j = 1; j <= 21; j++) { this.legsMode.push({mode: LegsMode.FirstTo, targetNumber: j}); } 
    for (let i = 1; i <= 21; i=i+2) { this.legsMode.push({mode: LegsMode.BestOf, targetNumber: i}); } 
  }

}

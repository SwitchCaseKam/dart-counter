import { Component, OnInit } from '@angular/core';
import { SetsField } from './sets-config.model';

@Component({
  selector: 'app-sets-config-field',
  templateUrl: './sets-config-field.component.html',
  styleUrls: ['./sets-config-field.component.css']
})
export class SetsConfigFieldComponent implements OnInit {

  public setsMode: SetsField[] = [];

  constructor() { }

  public ngOnInit(): void {
  }

}

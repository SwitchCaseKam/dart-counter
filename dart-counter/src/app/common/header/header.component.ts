import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public appName = 'DART COUNTER';
  
  constructor() { }

  public ngOnInit(): void {
  }

}

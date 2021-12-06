import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameInfoBarComponent } from './game-info-bar.component';

describe('GameInfoBarComponent', () => {
  let component: GameInfoBarComponent;
  let fixture: ComponentFixture<GameInfoBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameInfoBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameInfoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

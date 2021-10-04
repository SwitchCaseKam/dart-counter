import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameModeFieldComponent } from './game-mode-field.component';

describe('GameModeFieldComponent', () => {
  let component: GameModeFieldComponent;
  let fixture: ComponentFixture<GameModeFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameModeFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameModeFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersGameStatsComponent } from './players-game-stats.component';

describe('PlayersGameStatsComponent', () => {
  let component: PlayersGameStatsComponent;
  let fixture: ComponentFixture<PlayersGameStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersGameStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersGameStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

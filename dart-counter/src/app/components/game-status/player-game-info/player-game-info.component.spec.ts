import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerGameInfoComponent } from './player-game-info.component';

describe('PlayerGameInfoComponent', () => {
  let component: PlayerGameInfoComponent;
  let fixture: ComponentFixture<PlayerGameInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerGameInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerGameInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

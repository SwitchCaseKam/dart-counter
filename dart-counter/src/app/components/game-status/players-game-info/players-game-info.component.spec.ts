import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersGameInfoComponent } from './players-game-info.component';

describe('PlayersGameInfoComponent', () => {
  let component: PlayersGameInfoComponent;
  let fixture: ComponentFixture<PlayersGameInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersGameInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersGameInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

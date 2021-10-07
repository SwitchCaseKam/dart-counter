import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersConfigFieldComponent } from './players-config-field.component';

describe('PlayersConfigFieldComponent', () => {
  let component: PlayersConfigFieldComponent;
  let fixture: ComponentFixture<PlayersConfigFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersConfigFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersConfigFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

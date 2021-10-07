import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsConfigFieldComponent } from './points-config-field.component';

describe('PointsConfigFieldComponent', () => {
  let component: PointsConfigFieldComponent;
  let fixture: ComponentFixture<PointsConfigFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointsConfigFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsConfigFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

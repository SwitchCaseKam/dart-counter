import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegsFieldComponent } from './legs-field.component';

describe('LegsFieldComponent', () => {
  let component: LegsFieldComponent;
  let fixture: ComponentFixture<LegsFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegsFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegsConfigFieldComponent } from './legs-config-field.component';

describe('LegsConfigFieldComponent', () => {
  let component: LegsConfigFieldComponent;
  let fixture: ComponentFixture<LegsConfigFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegsConfigFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegsConfigFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

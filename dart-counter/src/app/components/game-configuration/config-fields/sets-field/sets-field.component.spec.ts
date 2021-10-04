import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetsFieldComponent } from './sets-field.component';

describe('SetsFieldComponent', () => {
  let component: SetsFieldComponent;
  let fixture: ComponentFixture<SetsFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetsFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

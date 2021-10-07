import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetsConfigFieldComponent } from './sets-config-field.component';

describe('SetsConfigFieldComponent', () => {
  let component: SetsConfigFieldComponent;
  let fixture: ComponentFixture<SetsConfigFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetsConfigFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetsConfigFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

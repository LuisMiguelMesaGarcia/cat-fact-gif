import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactDisplayComponent } from './fact-display.component';

describe('FactDisplayComponent', () => {
  let component: FactDisplayComponent;
  let fixture: ComponentFixture<FactDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactDisplayComponent]
    });
    fixture = TestBed.createComponent(FactDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

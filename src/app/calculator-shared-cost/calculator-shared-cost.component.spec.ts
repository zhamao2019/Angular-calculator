import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorSharedCostComponent } from './calculator-shared-cost.component';

describe('CalculatorSharedCostComponent', () => {
  let component: CalculatorSharedCostComponent;
  let fixture: ComponentFixture<CalculatorSharedCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorSharedCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorSharedCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

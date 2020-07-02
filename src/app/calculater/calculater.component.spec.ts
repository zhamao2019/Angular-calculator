import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculaterComponent } from './calculater.component';

describe('CalculaterComponent', () => {
  let component: CalculaterComponent;
  let fixture: ComponentFixture<CalculaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

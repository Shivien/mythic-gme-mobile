import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FateChart } from './fate-chart';

describe('FateChart', () => {
  let component: FateChart;
  let fixture: ComponentFixture<FateChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FateChart],
    }).compileComponents();

    fixture = TestBed.createComponent(FateChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

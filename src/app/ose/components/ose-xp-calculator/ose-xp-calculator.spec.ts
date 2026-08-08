import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OseXpCalculator } from './ose-xp-calculator';

describe('OseXpCalculator', () => {
  let component: OseXpCalculator;
  let fixture: ComponentFixture<OseXpCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OseXpCalculator],
    }).compileComponents();

    fixture = TestBed.createComponent(OseXpCalculator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

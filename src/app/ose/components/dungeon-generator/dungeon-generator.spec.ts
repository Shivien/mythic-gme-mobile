import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonGenerator } from './dungeon-generator';

describe('DungeonGenerator', () => {
  let component: DungeonGenerator;
  let fixture: ComponentFixture<DungeonGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DungeonGenerator],
    }).compileComponents();

    fixture = TestBed.createComponent(DungeonGenerator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

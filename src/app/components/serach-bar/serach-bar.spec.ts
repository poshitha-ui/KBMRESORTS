import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachBar } from './serach-bar';

describe('SerachBar', () => {
  let component: SerachBar;
  let fixture: ComponentFixture<SerachBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerachBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerachBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

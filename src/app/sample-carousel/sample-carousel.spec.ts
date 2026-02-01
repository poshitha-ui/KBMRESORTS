import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCarousel } from './sample-carousel';

describe('SampleCarousel', () => {
  let component: SampleCarousel;
  let fixture: ComponentFixture<SampleCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

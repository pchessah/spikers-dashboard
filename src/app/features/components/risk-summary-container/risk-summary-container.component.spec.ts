import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskSummaryContainerComponent } from './risk-summary-container.component';

describe('RiskSummaryContainerComponent', () => {
  let component: RiskSummaryContainerComponent;
  let fixture: ComponentFixture<RiskSummaryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskSummaryContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskSummaryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextualRiskTableComponent } from './contextual-risk-table.component';

describe('ContextualRiskTableComponent', () => {
  let component: ContextualRiskTableComponent;
  let fixture: ComponentFixture<ContextualRiskTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextualRiskTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextualRiskTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

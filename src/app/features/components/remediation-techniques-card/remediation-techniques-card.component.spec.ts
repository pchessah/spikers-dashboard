import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemediationTechniquesCardComponent } from './remediation-techniques-card.component';

describe('RemediationTechniquesCardComponent', () => {
  let component: RemediationTechniquesCardComponent;
  let fixture: ComponentFixture<RemediationTechniquesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemediationTechniquesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemediationTechniquesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

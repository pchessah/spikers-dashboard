import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemediationTechniquesContainerComponent } from './remediation-techniques-container.component';

describe('RemediationTechniquesContainerComponent', () => {
  let component: RemediationTechniquesContainerComponent;
  let fixture: ComponentFixture<RemediationTechniquesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemediationTechniquesContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemediationTechniquesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightInformationPanelComponent } from './right-information-panel.component';

describe('RightInformationPanelComponent', () => {
  let component: RightInformationPanelComponent;
  let fixture: ComponentFixture<RightInformationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightInformationPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightInformationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

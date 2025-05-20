import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterInformationPanelComponent } from './center-information-panel.component';

describe('CenterInformationPanelComponent', () => {
  let component: CenterInformationPanelComponent;
  let fixture: ComponentFixture<CenterInformationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenterInformationPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterInformationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

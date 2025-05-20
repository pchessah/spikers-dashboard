import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPanelTableComponent } from './info-panel-table.component';

describe('InfoPanelTableComponent', () => {
  let component: InfoPanelTableComponent;
  let fixture: ComponentFixture<InfoPanelTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPanelTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPanelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

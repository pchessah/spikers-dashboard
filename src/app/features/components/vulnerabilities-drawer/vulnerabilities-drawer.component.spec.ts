import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VulnerabilitiesDrawerComponent } from './vulnerabilities-drawer.component';

describe('VulnerabilitiesDrawerComponent', () => {
  let component: VulnerabilitiesDrawerComponent;
  let fixture: ComponentFixture<VulnerabilitiesDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VulnerabilitiesDrawerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VulnerabilitiesDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

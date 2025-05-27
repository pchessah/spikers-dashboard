import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeInitialComponent } from './node-initial.component';

describe('NodeInitialComponent', () => {
  let component: NodeInitialComponent;
  let fixture: ComponentFixture<NodeInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NodeInitialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Node3Component } from './node3.component';

describe('Node3Component', () => {
  let component: Node3Component;
  let fixture: ComponentFixture<Node3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Node3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Node3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

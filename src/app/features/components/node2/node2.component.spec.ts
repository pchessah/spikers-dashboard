import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Node2Component } from './node2.component';

describe('Node2Component', () => {
  let component: Node2Component;
  let fixture: ComponentFixture<Node2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Node2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Node2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

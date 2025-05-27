import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Node4Component } from './node4.component';

describe('Node4Component', () => {
  let component: Node4Component;
  let fixture: ComponentFixture<Node4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Node4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Node4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

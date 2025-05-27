import { Component, Output, EventEmitter, signal, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ASSET_FLOW_NODES, ASSET_FLOW_EDGES, ASSET_FLOW_SHIELDS, AssetFlowNode, AssetFlowEdge, AssetFlowShield } from '../../data';
import { VulnerabilitiesDrawerComponent } from '../vulnerabilities-drawer/vulnerabilities-drawer.component';
import { NodePopoverTriggerDirective } from '../../directives/node-popover-trigger/node-popover-trigger.directive';
import { Node4Component } from '../node4/node4.component';
import { Node3Component } from "../node3/node3.component";
import { Node2Component } from "../node2/node2.component";
  import { Node1Component } from "../node1/node1.component";
import { NodeInitialComponent } from '../node-initial/node-initial.component';
@Component({
  selector: 'app-asset-flow',
  standalone: true,
  imports: [CommonModule,
    NgOptimizedImage,
    VulnerabilitiesDrawerComponent,
    NodePopoverTriggerDirective,
    Node4Component,
    Node3Component,
    Node2Component,
    NodeInitialComponent,
    Node1Component],
  templateUrl: './asset-flow.component.html',
  styleUrls: ['./asset-flow.component.scss']
})
export class AssetFlowComponent {
  @Output() drawerContentEmitted = new EventEmitter<TemplateRef<unknown>>();
  shields: AssetFlowShield[] = ASSET_FLOW_SHIELDS;
  nodes: AssetFlowNode[] = ASSET_FLOW_NODES;
  edges: AssetFlowEdge[] = ASSET_FLOW_EDGES;
  altText = 'Lorem "ipsum"';

  @ViewChild('node1Template') node1Template!: TemplateRef<unknown>;
  @ViewChild('node2Template') node2Template!: TemplateRef<unknown>;
  @ViewChild('node3Template') node3Template!: TemplateRef<unknown>;
  @ViewChild('node4Template') node4Template!: TemplateRef<unknown>;

  popovers = this.nodes.map(() => ({
    show: signal(false),
    x: signal(0),
    y: signal(0)
  }));

  private readonly drawerWidth = 460;
  private readonly popoverHeight = 180;
  private readonly popoverVerticalOffsetAbove = 230;
  private readonly popoverHorizontalOffsetRight = 25;
  private readonly popoverVerticalOffsetRight = 35;

  onNodeClick(idx: number) {
    if (this.isMobile()) {
      switch (idx) {
        case 0:
          this.drawerContentEmitted.emit(this.node1Template);
          break;
        case 1:
          this.drawerContentEmitted.emit(this.node2Template);
          break;
        case 2:
          this.drawerContentEmitted.emit(this.node3Template);
          break;
        case 3:
          this.drawerContentEmitted.emit(this.node4Template);
          break;
      }
      this.popovers[idx].show.set(false);
    }
  }

  onNodePopoverEnter(event: Event, idx: number) {

    const mouseEvent = event as MouseEvent;
    this.popovers.forEach((popover, i) => {
      if (i === idx) {
        popover.show.set(true);
        const rect = (mouseEvent.target as HTMLElement).getBoundingClientRect();
        if (idx === 3 || idx === 4) {
          popover.x.set(rect.left + window.scrollX + rect.width / 2 - this.drawerWidth / 2);
          popover.y.set(rect.top + window.scrollY - this.popoverHeight + this.popoverVerticalOffsetAbove);
        } else {
          popover.x.set((rect.right + window.scrollX) - this.popoverHorizontalOffsetRight);
          popover.y.set(rect.top + window.scrollY + this.popoverVerticalOffsetRight);
        }
      } else {
        popover.show.set(false);
      }
    });
  }

  onNodePopoverLeave(idx: number) {
    this.popovers[idx].show.set(false);
  }

  isMobile() {
    return window.innerWidth <= 640;
  }
}

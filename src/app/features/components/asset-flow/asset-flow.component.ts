import { Component, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ASSET_FLOW_NODES, ASSET_FLOW_EDGES, ASSET_FLOW_SHIELDS, AssetFlowNode, AssetFlowEdge, AssetFlowShield } from '../../data';
import { VulnerabilitiesDrawerComponent } from '../vulnerabilities-drawer/vulnerabilities-drawer.component';
import { NodePopoverTriggerDirective } from '../../directives/node-popover-trigger/node-popover-trigger.directive';


@Component({
  selector: 'app-asset-flow',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, VulnerabilitiesDrawerComponent, NodePopoverTriggerDirective],
  templateUrl: './asset-flow.component.html',
  styleUrls: ['./asset-flow.component.scss']
})
export class AssetFlowComponent {
  shields: AssetFlowShield[] = ASSET_FLOW_SHIELDS;
  nodes: AssetFlowNode[] = ASSET_FLOW_NODES;
  edges: AssetFlowEdge[] = ASSET_FLOW_EDGES;

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

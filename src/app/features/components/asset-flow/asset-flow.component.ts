import { Component, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ASSET_FLOW_NODES, ASSET_FLOW_EDGES, ASSET_FLOW_SHIELDS, AssetFlowNode, AssetFlowEdge, AssetFlowShield } from '../../data';
import { VulnerabilitiesDrawerComponent } from '../vulnerabilities-drawer/vulnerabilities-drawer.component';

@Component({
  selector: 'app-asset-flow',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, VulnerabilitiesDrawerComponent],
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


  private drawerWidth = 460;

  onNodeMouseEnter(event: MouseEvent, idx: number) {
    this.popovers.forEach((popover, i) => {
      if (i === idx) {
        popover.show.set(true);
        const rect = (event.target as HTMLElement).getBoundingClientRect();
        if (idx === 3 || idx === 4) {
          // Show to the left of the node
          popover.x.set(rect.left + window.scrollX - this.drawerWidth + 5);
        } else {
          // Show to the right of the node
          popover.x.set((rect.right + window.scrollX) - 12);
        }
        popover.y.set(rect.top + window.scrollY);
      } else {
        popover.show.set(false);
      }
    });
  }

  onNodeMouseLeave(idx: number) {
    this.popovers[idx].show.set(false);
  }

  isMobile() {
    return window.innerWidth <= 640;
  }
}

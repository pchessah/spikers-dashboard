import { Component } from '@angular/core';
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

  showVulnPopover = false;
  popoverX = 0;
  popoverY = 0;

  onNodeMouseEnter(event: MouseEvent) {
    this.showVulnPopover = true;
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    this.popoverX = (rect.right + window.scrollX) - 5;
    this.popoverY = rect.top + window.scrollY;
  }

  onNodeMouseLeave() {
    this.showVulnPopover = false;
  }
}

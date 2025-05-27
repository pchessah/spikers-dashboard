import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { AssetFlowComponent } from "../asset-flow/asset-flow.component";
import { RiskSummaryContainerComponent } from "../risk-summary-container/risk-summary-container.component";
import { NodeInitialComponent } from "../node-initial/node-initial.component";
import { Node1Component } from "../node1/node1.component";
import { Node2Component } from "../node2/node2.component";
import { Node3Component } from "../node3/node3.component";

@Component({
  selector: 'app-right-information-panel',
  imports: [
    AssetFlowComponent,
    RiskSummaryContainerComponent,
    DrawerModule,
    NodeInitialComponent,
    Node1Component,
    Node2Component,
    Node3Component
  ],
  templateUrl: './right-information-panel.component.html',
  styleUrl: './right-information-panel.component.scss'
})
export class RightInformationPanelComponent {
  visible = false;
  currentNode: number = 0;

  toggleDrawer() {
    this.visible = !this.visible;
  }

  showInfo(info: number) {
    this.visible = true;
    this.currentNode = info;
  }
}

import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { AssetFlowComponent } from "../asset-flow/asset-flow.component";
import { RiskSummaryContainerComponent } from "../risk-summary-container/risk-summary-container.component";

@Component({
  selector: 'app-right-information-panel',
  imports: [AssetFlowComponent, RiskSummaryContainerComponent, DrawerModule],
  templateUrl: './right-information-panel.component.html',
  styleUrl: './right-information-panel.component.scss'
})
export class RightInformationPanelComponent {
  visible = false;
  info = '';

  toggleDrawer() {
    this.visible = !this.visible;
  }

  showInfo(info: any) {
    this.visible = true;
    this.info = info;
  }
}

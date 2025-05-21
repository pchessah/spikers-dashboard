import { Component } from '@angular/core';
import { AssetFlowComponent } from "../asset-flow/asset-flow.component";
import { RiskSummaryContainerComponent } from "../risk-summary-container/risk-summary-container.component";
@Component({
  selector: 'app-right-information-panel',
  imports: [AssetFlowComponent, RiskSummaryContainerComponent],
  templateUrl: './right-information-panel.component.html',
  styleUrl: './right-information-panel.component.scss'
})
export class RightInformationPanelComponent {

}

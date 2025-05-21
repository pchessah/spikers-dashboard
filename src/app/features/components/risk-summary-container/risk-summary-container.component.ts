import { Component } from '@angular/core';
import { RiskSummaryComponent } from '../risk-summary/risk-summary.component';
import { ContextualRiskTableComponent } from '../contextual-risk-table/contextual-risk-table.component';
@Component({
  selector: 'app-risk-summary-container',
  imports: [RiskSummaryComponent, ContextualRiskTableComponent],
  templateUrl: './risk-summary-container.component.html',
  styleUrl: './risk-summary-container.component.scss'
})
export class RiskSummaryContainerComponent {

}

import 'chart.js/auto';
import { Component, computed } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { RiskState, RISK_STATES } from './../../../models/risk.constants';
import { ChartModule } from 'primeng/chart';
import { AssetService } from '../../services/asset.service';
import { CommonModule } from '@angular/common';

function getVarColor(varName: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(varName).trim() || varName;
}

@Component({
  selector: 'app-risk-summary',
  standalone: true,
  imports: [ChartModule, CommonModule],
  templateUrl: './risk-summary.component.html',
  styleUrls: ['./risk-summary.component.scss']
})
export class RiskSummaryComponent {
  assets;
  constructor(private assetService: AssetService) {
    this.assets = this.assetService.getAssetsSignal();
  }

  riskCounts = computed(() => {
    const counts: Record<RiskState, number> = { Critical: 0, Warning: 0, Safe: 0 };
    for (const asset of this.assets()) {
      if (counts[asset.contextualRisk as RiskState] !== undefined) {
        counts[asset.contextualRisk as RiskState]++;
      }
    }
    return counts;
  });

  // Get the risk type with the highest count
  maxRisk = computed(() => {
    const counts = this.riskCounts();
    let maxType: RiskState = 'Critical';
    let maxValue = counts['Critical'];
    for (const state of RISK_STATES) {
      if (counts[state] > maxValue) {
        maxType = state;
        maxValue = counts[state];
      }
    }
    return { type: maxType, value: maxValue };
  });

  // For custom legend: get color for each risk type
  riskColors: Record<RiskState, string> = {
    Critical: getVarColor('--color-spikers-critical'),
    Warning: getVarColor('--color-spikers-orange'),
    Safe: getVarColor('--color-spikers-green')
  };

  // For custom legend: get label, number, color, and font weights
  legendItems = computed(() => {
    const counts = this.riskCounts();
    return RISK_STATES.map(state => ({
      label: state,
      count: counts[state],
      color: this.riskColors[state]
    }));
  });

  chartData = computed<ChartData<'doughnut'>>(() => {
    const counts = this.riskCounts();
    return {
      labels: RISK_STATES.map(state => counts[state].toString()),
      datasets: [
        {
          data: RISK_STATES.map((state: RiskState) => counts[state]),
          backgroundColor: [
            this.riskColors['Critical'],
            this.riskColors['Warning'],
            this.riskColors['Safe']
          ]
        }
      ]
    };
  });

  chartOptions: ChartOptions<'doughnut'> = {
    responsive: false,
    plugins: {
      legend: {
        display: false,
        position: 'left',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          boxWidth: 25,
          boxHeight: 25
        }
      }
    },
    cutout: '85%'
  };
}

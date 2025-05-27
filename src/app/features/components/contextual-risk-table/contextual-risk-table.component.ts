import { Component } from '@angular/core';
import { AssetService } from '../../services/asset.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-contextual-risk-table',
  imports: [CommonModule, NgOptimizedImage, DrawerModule],
  templateUrl: './contextual-risk-table.component.html',
  styleUrl: './contextual-risk-table.component.scss'
})
export class ContextualRiskTableComponent {
  visible = false;
  data;
  paginatedData;
  page;
  totalPages;
  pageSize;
  selectedRow: any = null;

  constructor(private assetService: AssetService) {
    this.data = this.assetService.getAssetsSignal();
    this.paginatedData = this.assetService.getPaginatedAssetsSignal();
    this.page = this.assetService.getPageSignal();
    this.totalPages = this.assetService.getTotalPagesSignal();
    this.pageSize = this.assetService.getPageSize();
  }

  riskBgColor(risk: string) {
    switch (risk) {
      case 'Critical': return 'var(--color-spikers-contextual-risk-bg)';
      case 'Warning': return 'var(--color-spikers-orange-bg, #FFF4E0)';
      case 'Safe': return 'var(--color-spikers-green-bg-active, #E9FAF0)';
      default: return 'var(--color-spikers-contextual-risk-bg)';
    }
  }
  riskTextColor(risk: string) {
    switch (risk) {
      case 'Critical': return 'var(--color-spikers-critical)';
      case 'Warning': return 'var(--color-spikers-orange)';
      case 'Safe': return 'var(--color-spikers-green)';
      default: return 'var(--color-spikers-critical)';
    }
  }

  prevPage() {
    this.assetService.prevPage();
  }
  nextPage() {
    this.assetService.nextPage();
  }

  min(a: number, b: number) {
    return a < b ? a : b;
  }

  onRowClick(row: any) {
    this.selectedRow = row;
    this.visible = true;
  }
}

import { Component, signal, computed } from '@angular/core';

interface AssetRow {
  icon: string;
  assetName: string;
  ip: string;
  contextualRisk: string;
}

@Component({
  selector: 'app-contextual-risk-table',
  imports: [],
  templateUrl: './contextual-risk-table.component.html',
  styleUrl: './contextual-risk-table.component.scss'
})
export class ContextualRiskTableComponent {
  readonly pageSize = 2;
  readonly data = [
    { icon: 'pi pi-server', assetName: 'Server Alpha', ip: '192.168.1.10', contextualRisk: 'Critical' },
    { icon: 'pi pi-desktop', assetName: 'Workstation Beta', ip: '192.168.1.11', contextualRisk: 'Critical' },
    { icon: 'pi pi-database', assetName: 'Database Gamma', ip: '192.168.1.12', contextualRisk: 'Critical' },
    { icon: 'pi pi-cloud', assetName: 'Cloud Node Delta', ip: '192.168.1.13', contextualRisk: 'Critical' }
  ];
  page = signal(1);
  totalPages = Math.ceil(this.data.length / this.pageSize);

  paginatedData = computed(() => {
    const start = (this.page() - 1) * this.pageSize;
    return this.data.slice(start, start + this.pageSize);
  });

  prevPage() {
    if (this.page() > 1) this.page.update(p => p - 1);
  }
  nextPage() {
    if (this.page() < this.totalPages) this.page.update(p => p + 1);
  }

  min(a: number, b: number) {
    return a < b ? a : b;
  }
}

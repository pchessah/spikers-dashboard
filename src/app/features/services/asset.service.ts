import { Injectable, signal, computed } from '@angular/core';
import { Asset } from '../../models/asset.interface';

const ASSET_DATA: Asset[] = [
  { icon: 'pi pi-server', assetName: 'Server Alpha', ip: '192.168.1.10', contextualRisk: 'Critical' },
  { icon: 'pi pi-desktop', assetName: 'Workstation Beta', ip: '192.168.1.11', contextualRisk: 'Critical' },
  { icon: 'pi pi-database', assetName: 'Database Gamma', ip: '192.168.1.12', contextualRisk: 'Warning' },
  { icon: 'pi pi-cloud', assetName: 'Cloud Node Delta', ip: '192.168.1.13', contextualRisk: 'Safe' }
];

@Injectable({providedIn: 'root'})
export class AssetService {
  private assetsSignal = signal<Asset[]>(ASSET_DATA);
  private pageSize = 2;
  private page = signal(1);

  getAssetsSignal() {
    return this.assetsSignal;
  }

  getPageSignal() {
    return this.page;
  }

  getPageSize() {
    return this.pageSize;
  }

  getTotalPagesSignal() {
    return computed(() => Math.ceil(this.assetsSignal().length / this.pageSize));
  }

  getPaginatedAssetsSignal() {
    return computed(() => {
      const start = (this.page() - 1) * this.pageSize;
      return this.assetsSignal().slice(start, start + this.pageSize);
    });
  }

  nextPage() {
    const totalPages = Math.ceil(this.assetsSignal().length / this.pageSize);
    if (this.page() < totalPages) {
      this.page.update(p => p + 1);
    }
  }

  prevPage() {
    if (this.page() > 1) {
      this.page.update(p => p - 1);
    }
  }

  min(a: number, b: number) {
    return a < b ? a : b;
  }
}

import { Injectable, signal, computed } from '@angular/core';
import { Asset } from '../../models/asset.interface';
import { ASSET_DATA } from '../data';

@Injectable({providedIn: 'root'})
export class AssetService {
  private readonly assetsSignal = signal<Asset[]>(ASSET_DATA);
  private readonly pageSize = 2;
  private readonly page = signal(1);

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

import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SidebarStateService {
  public isMinimized = signal(false);


  setIsMinimized(value: boolean) {
    this.isMinimized.set(value);
  }

  toggle() {
    this.isMinimized.update(v => !v);
  }
}

import { Component, signal } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  minimized = signal(false);

  navLinks = [
    { label: 'Dashboard', route: '/', icon: 'pi pi-home' },
    { label: 'Reports', route: '/reports', icon: 'pi pi-chart-bar' },
    { label: 'Settings', route: '/settings', icon: 'pi pi-cog' }
  ];

  constructor(private readonly router: Router) {}

  toggleSidebar() {
    this.minimized.update(v => !v);
  }

  isActive(route: string): boolean {
    return this.router.isActive(route, { paths: 'exact', queryParams: 'ignored', fragment: 'ignored', matrixParams: 'ignored' });
  }
}

import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { SidebarStateService } from '../../../features/services/sidebar-state.service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(private readonly router: Router, public sidebarState: SidebarStateService) {}

  navLinks = [
    { label: 'Dashboard', route: '/', icon: 'pi pi-home' },
    { label: 'Reports', route: '/reports', icon: 'pi pi-chart-bar' },
    { label: 'Sitemaps', route: '/sitemaps', icon: 'pi pi-sitemap' },
    { label: 'Examples', route: '/examples', icon: 'pi pi-cog' },
  ];

  toggleSidebar() {
    this.sidebarState.toggle();
  }

  isActive(route: string): boolean {
    return this.router.isActive(route, { paths: 'exact', queryParams: 'ignored', fragment: 'ignored', matrixParams: 'ignored' });
  }
}

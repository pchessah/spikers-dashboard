import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { SidebarStateService } from '../../../features/services/sidebar-state.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, NgClass, NgOptimizedImage, TranslateModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(private readonly router: Router, public sidebarState: SidebarStateService, private readonly translate: TranslateService) {
    this.translate.addLangs(['en', 'sw']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.currentLang = 'en';
  }

  navLinks = [
    { label: 'Lorem', icon: 'hamburger.svg', isHamburger: true },
    { label: 'Lorem', route: '/lorem1', icon: 'dash.svg' },
    { label: 'Lorem', route: '/lorem2', icon: 'threat-scenarios.svg' },
    { label: 'Lorem', route: '/lorem', icon: 'inventory.svg' },
    { label: 'Lorem', route: '/', icon: 'volner.svg' },
    { label: 'Lorem', route: '/lorem5', icon: 'integration.svg' },
    { label: 'Lorem', route: '/lorem6', icon: 'policy.svg' },
    { label: 'Lorem', route: '/lorem7', icon: 'report.svg' },
  ];

  toggleSidebar() {
    this.sidebarState.toggle();
  }

  isActive(route: string): boolean {
    return this.router.isActive(route, { paths: 'exact', queryParams: 'ignored', fragment: 'ignored', matrixParams: 'ignored' });
  }

  currentLang = 'en';

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
  }
}

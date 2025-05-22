import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { SidebarStateService } from '../../../features/services/sidebar-state.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, NgClass, TranslateModule],
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
    { label: 'sidebar.dashboard', route: '/', icon: 'pi pi-home' },
    { label: 'sidebar.reports', route: '/reports', icon: 'pi pi-chart-bar' },
    { label: 'sidebar.sitemaps', route: '/sitemaps', icon: 'pi pi-sitemap' },
    { label: 'sidebar.examples', route: '/examples', icon: 'pi pi-cog' },
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

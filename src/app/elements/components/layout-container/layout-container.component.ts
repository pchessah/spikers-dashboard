import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NgClass } from '@angular/common';
import { SidebarStateService } from '../../../features/services/sidebar-state.service';

@Component({
  selector: 'app-layout-container',
  imports: [SidebarComponent, NgClass],
  templateUrl: './layout-container.component.html',
  styleUrl: './layout-container.component.scss'
})
export class LayoutContainerComponent {
  constructor(public sidebarState: SidebarStateService) {}
}

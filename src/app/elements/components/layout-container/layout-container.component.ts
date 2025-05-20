import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-layout-container',
  imports: [SidebarComponent, NgClass],
  templateUrl: './layout-container.component.html',
  styleUrl: './layout-container.component.scss'
})
export class LayoutContainerComponent {

}

import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-vulnerabilities-drawer',
  imports: [NgOptimizedImage],
  templateUrl: './vulnerabilities-drawer.component.html',
  styleUrl: './vulnerabilities-drawer.component.scss'
})
export class VulnerabilitiesDrawerComponent {
  identifier = input<string>('');
}

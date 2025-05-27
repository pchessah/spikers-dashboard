import { Component, input } from '@angular/core';

@Component({
  selector: 'app-vulnerabilities-drawer',
  templateUrl: './vulnerabilities-drawer.component.html',
  styleUrl: './vulnerabilities-drawer.component.scss'
})
export class VulnerabilitiesDrawerComponent {
  identifier = input<string>('');
  altText = 'Lorem "ipsum"'

}

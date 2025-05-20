import { Component, input } from '@angular/core';
import { InfoPanelData } from '../../../models/info-panel.interface';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss']
})
export class InfoPanelComponent {
  data = input<InfoPanelData>({ title: '', description: '' });
}

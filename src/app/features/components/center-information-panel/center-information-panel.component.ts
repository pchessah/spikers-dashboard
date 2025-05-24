import { Component, signal } from '@angular/core';
import { InfoPanelData } from '../../../models/info-panel.interface';
import { InfoPanelComponent } from '../info-panel/info-panel.component';
import { InfoPanelTableComponent } from '../info-panel-table/info-panel-table.component';
import { RemediationTechniquesContainerComponent } from '../remediation-techniques-container/remediation-techniques-container.component';
import { SidebarStateService } from '../../services/sidebar-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-center-information-panel',
  imports: [CommonModule, InfoPanelComponent, InfoPanelTableComponent, RemediationTechniquesContainerComponent],
  templateUrl: './center-information-panel.component.html',
  styleUrl: './center-information-panel.component.scss'
})
export class CenterInformationPanelComponent {
  constructor(public sidebarState: SidebarStateService) {}

  descriptionPanel = signal<InfoPanelData>({
    title: 'Description',
    description: `Lorem ipsum dolor sit amet consectetur. Aenean sodales pellentesque gravida nibh et magna faucibus. Dui commodo ut metus amet egestas habitant viverra. Quisque fusce senectus facilisis non diam leo nulla sem pellentesque. Sit in vel sed cursus metus sit fringilla vestibulum.`
  });

  extraPanel = signal<InfoPanelData>({
    title: 'Extra',
    description: `Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing fames egestas tellus dis pretium tempus. Justo nisl nisl lorem lectus id ornare. Rhoncus in egestas in amet porttitor pellentesque sit. Amet gravida integer velit felis. Eu consectetur interdum auctor sed aliquam. Eu pulvinar accumsan sed id. Duis a aliquam eu quisque commodo lectus. Lectus ipsum velit purus viverra vulputate viverra in nunc nulla. Euismod rhoncus mauris urna orci gravida sagittis netus. Amet mus in vel etiam. Interdum habitant congue massa in etiam sit. Commodo nibh viverra lobortis augue lorem quam lorem suspendisse.
`
  });
}

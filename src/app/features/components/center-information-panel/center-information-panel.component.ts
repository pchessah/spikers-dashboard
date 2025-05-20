import { Component, signal } from '@angular/core';
import { InfoPanelData } from '../../../models/info-panel.interface';
import { InfoPanelComponent } from '../info-panel/info-panel.component';
import { InfoPanelTableComponent } from '../info-panel-table/info-panel-table.component';
@Component({
  selector: 'app-center-information-panel',
  imports: [InfoPanelComponent, InfoPanelTableComponent],
  templateUrl: './center-information-panel.component.html',
  styleUrl: './center-information-panel.component.scss'
})
export class CenterInformationPanelComponent {
  descriptionPanel = signal<InfoPanelData>({
    title: 'Description',
    description: `The Data Center Dashboard provides real-time monitoring and management of critical infrastructure. It displays key metrics such as server health, network performance, power usage, and environmental conditions. With customizable alerts and visualizations, administrators can quickly identify and resolve issues, ensuring maximum uptime and efficiency. The dashboard integrates with various data sources, offering a unified view of operations. Its intuitive interface allows users to drill down into specific systems, track trends, and generate detailed reports. This tool is essential for maintaining optimal performance and security in modern data centers.`
  });

  extraPanel = signal<InfoPanelData>({
    title: 'Extra',
    description: `Data centers are the backbone of digital infrastructure, supporting cloud services, enterprise applications, and online platforms. They require robust security, efficient cooling, and reliable power management. The dashboard helps operators manage these challenges by providing insights into resource utilization and potential risks. It also supports compliance with industry standards and helps plan for future expansion. By leveraging advanced analytics and automation, data centers can reduce operational costs, minimize downtime, and deliver consistent service to clients and users worldwide.`
  });
}

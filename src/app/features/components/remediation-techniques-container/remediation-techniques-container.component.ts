import { Component, signal } from '@angular/core';
import { RemediationTechniqueCardData } from '../../../models/remediation-techniques.interface';
import { RemediationTechniquesCardComponent } from '../remediation-techniques-card/remediation-techniques-card.component';

@Component({
  selector: 'app-remediation-techniques-container',
  imports: [RemediationTechniquesCardComponent],
  templateUrl: './remediation-techniques-container.component.html',
  styleUrl: './remediation-techniques-container.component.scss'
})
export class RemediationTechniquesContainerComponent {
  remediationTechniques = signal<RemediationTechniqueCardData[]>([
    {
      cardTitle: 'Infrastructure',
      icon: 'pi pi-server',
      title: 'Patch ',
      subtitle: 'Critical Updates',
      summary: 'Apply security patches promptly.',
      description: 'Ensure all systems and applications are updated with the latest security patches to mitigate vulnerabilities and reduce risk of exploitation.'
    },
    {
      cardTitle: 'Access Control',
      icon: 'pi pi-lock',
      title: 'Access',
      subtitle: 'User Permissions',
      summary: 'Restrict access to sensitive data.',
      description: 'Implement strict access controls and regularly review user permissions to prevent unauthorized access to critical resources.'
    },
    {
      cardTitle: 'Data Protection',
      icon: 'pi pi-database',
      title: 'Data Backup',
      subtitle: 'Disaster Recovery',
      summary: 'Regularly backup important data.',
      description: 'Schedule frequent backups and test recovery procedures to ensure data integrity and availability in case of incidents.'
    }
  ]);
}

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
      cardTitle: 'Lorem ipsum dolor sit',
      icon: 'pi pi-server',
      title: 'Server ',
      subtitle: 'Server',
      summary: 'Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur. In laoreet elementum luctus odio. Id enim urna.' },
    {
      cardTitle: 'Lorem ipsum dolor sit',
      icon: 'pi pi-lock',
      title: 'Server ',
      subtitle: 'Server',
      summary: 'Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur. Quis viverra etiam pellentesque lectus semper in massa purus. Auctor aenean aenean senectus massa dignissim vehicula mi erat purus. Praesent scelerisque aliquet metus sagittis dictum sed sed. Sed venenatis sed urna quam.' },
    {
      cardTitle: 'Lorem ipsum dolor sit',
      icon: 'pi pi-database',
      title: 'Server ',
      subtitle: 'Server',
      summary: 'Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur. Nunc vitae tortor convallis vitae arcu. Magna.' }
  ]);
}

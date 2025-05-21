import { Component, Input, signal } from '@angular/core';
import { RemediationTechniqueCardData } from '../../../models/remediation-techniques.interface';

@Component({
  selector: 'app-remediation-techniques-card',
  standalone: true,
  templateUrl: './remediation-techniques-card.component.html',
  styleUrl: './remediation-techniques-card.component.scss'
})
export class RemediationTechniquesCardComponent {
  @Input() technique!: RemediationTechniqueCardData;
  descriptionOpen = signal(false);

  toggleDescription() {
    this.descriptionOpen.update(open => !open);
  }
}

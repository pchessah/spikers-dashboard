import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-asset-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './asset-flow.component.html',
  styleUrls: ['./asset-flow.component.scss']
})
export class AssetFlowComponent {
  shields = [
    {
      bgColor: 'bg-[var(--color-spikers-red)]',
      label: 'Critical',
      textColor: 'text-[var(--color-spikers-red)]'
    },
    {
      bgColor: 'bg-[var(--color-spikers-orange)]',
      label: 'Warning',
      textColor: 'text-[var(--color-spikers-orange)]'
    },
    {
      bgColor: 'bg-[var(--color-spikers-green)]',
      label: 'Safe',
      textColor: 'text-[var(--color-spikers-green)]'
    }
  ];
}

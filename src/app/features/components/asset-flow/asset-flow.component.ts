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

  nodes = [
    { id: 'A', icon: 'pi pi-database', label: 'Source' },
    { id: 'B', icon: 'pi pi-cog', label: 'Processing' },
    { id: 'C', icon: 'pi pi-server', label: 'Destination' },
    { id: 'D', icon: 'pi pi-user', label: 'User A' },
    { id: 'E', icon: 'pi pi-user', label: 'User B' }
  ];

  edges = [
    { from: 'A', to: 'B' },
    { from: 'B', to: 'C' },
    { from: 'C', to: 'D' },
    { from: 'C', to: 'E' }
  ];
}

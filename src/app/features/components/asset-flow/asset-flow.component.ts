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

  mermaidCode = `
flowchart LR
    A@{ icon: "pi:pi-database", form: circle, label: "Source", pos: b, h: 60 }
    B@{ icon: "pi:pi-arrows-h", form: circle, label: "Processing", pos: b, h: 60 }
    C@{ icon: "pi:pi-server", form: circle, label: "Destination", pos: b, h: 60 }
    D@{ icon: "pi:pi-user", form: circle, label: "User A", pos: b, h: 60 }
    E@{ icon: "pi:pi-user", form: circle, label: "User B", pos: b, h: 60 }

    A --> B --> C
    C --> D
    C --> E

    classDef invisible fill:none,stroke:none;
    classDef labelStyle font-size:13px,fill:#525D73,font-weight:600;
    class A,B,C,D,E labelStyle;



`;



}

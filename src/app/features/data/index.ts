import { Asset } from "../../models/asset.interface";

export const ASSET_DATA: Asset[] = [
  { icon: '/icons/server.svg', assetName: 'Loremipsumdolorsit', ip: '192.168.1.10', contextualRisk: 'Critical' },
  { icon: '/icons/server.svg', assetName: 'Loremipsumdolorsit002', ip: '192.168.1.11', contextualRisk: 'Critical' },
  { icon: '/icons/server.svg', assetName: 'Loremipsumdolorsit003', ip: '192.168.1.12', contextualRisk: 'Warning' },
  { icon: '/icons/server.svg', assetName: 'Loremipsumdolorsit004', ip: '192.168.1.13', contextualRisk: 'Safe' },
  { icon: '/icons/server.svg', assetName: 'Loremipsumdolorsit005', ip: '192.168.1.14', contextualRisk: 'Safe' },
  { icon: '/icons/server.svg', assetName: 'Loremipsumdolorsit006', ip: '192.168.1.15', contextualRisk: 'Safe' },
  { icon: '/icons/server.svg', assetName: 'Loremipsumdolorsit007', ip: '192.168.1.16', contextualRisk: 'Warning' },
  { icon: '/icons/server.svg', assetName: 'Loremipsumdolorsit008', ip: '192.168.1.17', contextualRisk: 'Critical' },
  { icon: '/icons/server.svg', assetName: 'Loremipsumdolorsit009', ip: '192.168.1.18', contextualRisk: 'Critical' },
  { icon: '/icons/server.svg', assetName: 'Loremipsumdolorsit010', ip: '192.168.1.19', contextualRisk: 'Safe' },

];

export interface AssetFlowNode {
  id: string;
  icon: string;
  label: string;
}

export interface AssetFlowEdge {
  from: string;
  to: string;
}

export interface AssetFlowShield {
  bgColor: string;
  label: string;
  textColor: string;
}


export const ASSET_FLOW_NODES: AssetFlowNode[] = [
  { id: 'A', icon: 'pi pi-database', label: 'Source' },
  { id: 'B', icon: 'pi pi-cog', label: 'Processing' },
  { id: 'C', icon: 'pi pi-server', label: 'Destination' },
  { id: 'D', icon: 'pi pi-user', label: 'User A' },
  { id: 'E', icon: 'pi pi-user', label: 'User B' }
];

export const ASSET_FLOW_EDGES: AssetFlowEdge[] = [
  { from: 'A', to: 'B' },
  { from: 'B', to: 'C' },
  { from: 'C', to: 'D' },
  { from: 'C', to: 'E' }
];

export const ASSET_FLOW_SHIELDS: AssetFlowShield[] = [
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

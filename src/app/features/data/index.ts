import { Asset } from "../../models/asset.interface";

export const ASSET_DATA: Asset[] = [
  { icon: 'pi pi-server', assetName: 'Server Alpha', ip: '192.168.1.10', contextualRisk: 'Critical' },
  { icon: 'pi pi-desktop', assetName: 'Workstation Beta', ip: '192.168.1.11', contextualRisk: 'Critical' },
  { icon: 'pi pi-database', assetName: 'Database Gamma', ip: '192.168.1.12', contextualRisk: 'Warning' },
  { icon: 'pi pi-cloud', assetName: 'Cloud Node Delta', ip: '192.168.1.13', contextualRisk: 'Safe' }
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

export const RISK_STATES = ['Critical', 'Warning', 'Safe'] as const;
export type RiskState = typeof RISK_STATES[number];

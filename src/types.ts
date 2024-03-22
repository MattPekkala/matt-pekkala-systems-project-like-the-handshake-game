export type Patient = {
  id: number;
  x: number;
  y: number;
  infected: boolean;
};

export type SimulationParameters = {  
  mosquitoConcentration: number;
};

export const defaultSimulationParameters: SimulationParameters = {
  mosquitoConcentration: 5,
};

export interface FlightInfo {
  month: string;
  range: string;
}

export interface FlightRoute {
  origin: string;
  destination: string;
  currency: string;
  estimates: FlightInfo[];
}

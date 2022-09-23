export interface Stop {
  'bustime-response': BustimeResponse;
}

export interface BustimeResponse {
  stops: StopElement[];
}

export interface StopElement {
  stpid: string;
  stpnm: string;
  lat: number;
  lon: number;
}

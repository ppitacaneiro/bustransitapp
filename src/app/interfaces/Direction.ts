export interface Direction {
  'bustime-response': BustimeResponse;
}

export interface BustimeResponse {
  directions: DirectionElement[];
}

export interface DirectionElement {
  dir: string;
}

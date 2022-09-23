export interface PatternResponse {
  'bustime-response': BustimeResponse;
}

export interface BustimeResponse {
  ptr: Ptr[];
}

export interface Ptr {
  pid: number;
  ln: number;
  rtdir: string;
  pt: Pt[];
}

export interface Pt {
  seq: number;
  lat: number;
  lon: number;
  typ: Typ;
  stpid?: string;
  stpnm?: string;
  pdist: number;
}

export enum Typ {
  S = 'S',
  W = 'W',
}

export interface BustimeRoutesResponse {
  'bustime-response': RoutesResponse;
}

export interface RoutesResponse {
  routes: Route[];
}

export interface Route {
  rt: string;
  rtnm: string;
  rtclr: string;
  rtdd: string;
}

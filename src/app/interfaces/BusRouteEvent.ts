export interface BusRouteEvent {
  busRoute: string;
  direction: string;
  busStop: string;
  date: DateClass;
  time: Time;
  key?: string;
}

export interface DateClass {
  year: number;
  month: number;
  day: number;
}

export interface Time {
  hour: number;
  minute: number;
  second: number;
}
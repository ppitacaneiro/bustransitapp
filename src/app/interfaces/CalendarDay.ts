import { BusRouteEvent } from './BusRouteEvent';
export interface CalendarDay {
    id:      number;
    weekDay: string;
    day:     Day;
    events:  BusRouteEvent[];
}

export interface Day {
    weekday:        string;
    dayNumber:      number;
    month:          string;
    monthNumber:    number;
    year:           number;
}

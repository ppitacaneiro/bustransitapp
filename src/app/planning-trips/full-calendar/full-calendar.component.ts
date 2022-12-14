import { FirebaseService } from './../../services/firebase.service';
import { CalendarDay } from './../../interfaces/CalendarDay';
import { BusRouteEvent } from './../../interfaces/BusRouteEvent';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

const NUMBER_OF_GRID_ELEMENTS = 42;

@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.scss'],
})
export class FullCalendarComponent implements OnInit {
  
  @Output() areEventsLoadedEvent = new EventEmitter();
  @Output() busRouteEventEmitter = new EventEmitter();
  
  monthNames: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  DAYS_OF_THE_WEEK: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  daysOfMonth: CalendarDay[] = [];
  busRouteEvents:BusRouteEvent[] = [];
  year!: number;
  month!: number;
  actualMonth!: string;
  actualYear!: number;
  today!: number;
  areEventsLoaded:boolean = false;

  constructor(
    private firebaseService: FirebaseService
  ) {}

  async ngOnInit() {
    const actualMonth = new Date().getMonth();
    const actualYear = new Date().getFullYear();
    this.year = actualYear;
    this.month = actualMonth;
    this.actualMonth = this.monthNames[actualMonth];
    this.actualYear = actualYear;
    this.today = new Date().getDate();
    
    await this.firebaseService.getAll()
    .then(response => {
      response.subscribe(data => {
        this.daysOfMonth = [];
        this.busRouteEvents = data;
        this.buildCalendar(this.month, this.year);
      });
    })
    .catch(err => console.error(err));
  }

  goToNextMonth() {
    this.daysOfMonth = [];
    if (this.month >= 11) {
      this.year++;
      this.month = 0;
    } else {
      this.month++;
    }
    this.buildCalendar(this.month, this.year);
  }

  goToPreviosMonth() {
    this.daysOfMonth = [];
    if (this.month <= 0) {
      this.year--;
      this.month = 11;
    } else {
      this.month--;
    }
    this.buildCalendar(this.month, this.year);
  }

  initCalendarDayObject(id:number, index:number) {
    return {
      id: id,
      weekDay: this.DAYS_OF_THE_WEEK[index],
      day: {
        weekday: '',
        dayNumber: 0,
        month: '',
        monthNumber: 0,
        year: 0
      },
      events: []
    }
  }

  buildCalendar(month: number, year: number) {
    let index = 0;
    const daysInMonth = this.getDaysInMonth(month, year);
    for (let i = 0; i < NUMBER_OF_GRID_ELEMENTS; i++) {
      this.daysOfMonth.push(this.initCalendarDayObject(i,index));
      index === this.DAYS_OF_THE_WEEK.length - 1 ? (index = 0) : index++;
    }

    let firstDayIndex = this.getIndexForFirstDay(daysInMonth);
    this.buildDaysInMonth(daysInMonth, firstDayIndex);
    this.getEventsForDays();
    this.areEventsLoaded = true;
    this.areEventsLoadedEvent.emit(true);
  }

  getEventsForDays() {
    this.daysOfMonth.forEach(x => {
      const events = this.busRouteEvents.filter(y => 
        y.date.day == x.day.dayNumber && 
        y.date.month == x.day.monthNumber && 
        y.date.year == x.day.year
      );
      if (events) x.events.push(...events);
    });
  }

  buildDaysInMonth(daysInMonth: any, index: number) {
    for (let i = 0; i < daysInMonth.length; i++) {
      this.daysOfMonth[index].day = this.createObjectForDay(daysInMonth[i]);
      index++;
    }
  }

  createObjectForDay(dayArr: any) {
    const day = dayArr.split(',');
    const dayWithMonth = day[1].split(' ');
    return {
      weekday: day[0],
      dayNumber: dayWithMonth[2],
      month: dayWithMonth[1],
      monthNumber: this.month+1,
      year: day[2],
    };
  }

  getIndexForFirstDay(daysInMonth: any) {
    let index = 0;
    const firstDay = daysInMonth[0].split(',')[0];
    for (let i = 0; i < this.daysOfMonth.length; i++) {
      if (this.daysOfMonth[i].weekDay.includes(firstDay)) {
        index = i;
        break;
      }
    }
    return index;
  }

  getDaysInMonth(month: number, year: number) {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    } as const;
    let date = new Date(year, month, 1);
    let days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date).toLocaleDateString('en-US', options));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  editBusRouteEvent(event:BusRouteEvent) {
    event.isSelected = !event.isSelected;
    if (event.isSelected) 
      this.busRouteEventEmitter.emit(event);
    else
      this.busRouteEventEmitter.emit();
  }
}

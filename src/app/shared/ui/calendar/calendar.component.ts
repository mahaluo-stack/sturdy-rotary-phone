import { DeviceService } from './../../../core/services/device.service';
import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { DAYS, MONTHS } from 'src/app/core/models/constants';
import { Device, GridDate } from 'src/app/core/models/types';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit, AfterViewInit {
  deviceService: DeviceService = inject(DeviceService);
  device: Device;

  gridSize: number = 42;
  prevNextMonth: number = 0;
  today: Date = new Date();
  days: Array<string> = DAYS;
  months: Array<string> = MONTHS;

  currentYear: number = new Date().getFullYear();
  currentMonth: number = new Date().getMonth();
  currentDay: number = new Date().getDay();
  currentMonthName: string = MONTHS[new Date().getMonth()];
  currentDayName: string = DAYS[new Date().getDay() - 1];
  dates: Array<GridDate> = [];

  selectedDate: Date;
  selectedDateString: string;
  todayBtn: string = 'today';
  prevBtn: string = '←';
  nextBtn: string = '→';

  constructor() {
    this.today.setHours(0, 0, 0, 0);
    this.selectedDate = this.today;
    this.selectedDateString = this.today.toDateString();
    this.device = this.deviceService.getDevice();
    this.update(0);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  setToday() {
    this.currentYear = new Date().getFullYear();
    this.currentMonth = new Date().getMonth();
    this.update(0);
  }

  update(prevNext: number) {
    this.dates = [];
    const date = new Date(this.currentYear, this.currentMonth + prevNext);

    this.currentYear = date.getFullYear();
    this.currentMonth = date.getMonth();
    this.currentMonthName = MONTHS[this.currentMonth];

    const firstDay = new Date(this.currentYear, this.currentMonth).getDay() - 1;
    const totalMonthDays = new Date(
      this.currentYear,
      this.currentMonth + 1,
      0
    ).getDate();
    const totdalPrevMonthDays = new Date(
      this.currentYear,
      this.currentMonth,
      0
    ).getDate();

    for (var i = 1; i <= firstDay; i++) {
      const prevMonthDate = totdalPrevMonthDays - firstDay + i;
      const key = new Date(
        this.currentYear,
        this.currentMonth - 1,
        prevMonthDate
      );
      this.dates.push({
        id: this.dates.length.toString() + 1,
        dateString: key.toDateString(),
        key: key,
        date: prevMonthDate,
        monthClass: 'prev',
        todayClass: 'prev',
      });
    }

    for (var i = 1; i <= totalMonthDays; i++) {
      const key = new Date(this.currentYear, this.currentMonth, i);
      if (
        i === this.today.getDate() &&
        this.currentMonth === this.today.getMonth() &&
        this.currentYear === this.today.getFullYear()
      ) {
        this.dates.push({
          id: this.dates.length.toString() + 1,
          dateString: key.toDateString(),
          key: key,
          date: i,
          monthClass: 'current',
          todayClass: 'today',
        });
      } else {
        this.dates.push({
          id: this.dates.length.toString() + 1,
          dateString: key.toDateString(),
          key: key,
          date: i,
          monthClass: 'current',
          todayClass: 'current',
        });
      }
    }

    if (this.dates.length < this.gridSize) {
      var count = this.gridSize - this.dates.length;
      for (var i = 1; i <= count; i++) {
        var key = new Date(this.currentYear, this.currentMonth + 1, i);
        this.dates.push({
          id: this.dates.length.toString() + 1,
          dateString: key.toDateString(),
          key: key,
          date: i,
          monthClass: 'next',
          todayClass: 'next',
        });
      }
    }
  }

  handleSelectDate(dateKey: Date) {
    if (dateKey === this.selectedDate) {
      this.selectedDate = new Date();
      this.selectedDateString = '';
    } else {
      this.selectedDateString = dateKey.toDateString();
      this.selectedDate = dateKey;
    }
  }
}

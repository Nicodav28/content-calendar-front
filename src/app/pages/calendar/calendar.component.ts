import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NCalendar } from '../../model/calendar.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  public headers: NCalendar.Header = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
  ];

  private readonly totalItems: number = 42;
  private readonly currentDate: Date = new Date();
  private readonly daysInMonthCache = new Map<string, number>();

  public calendarElements: NCalendar.Body[] = [];

  public constructor() {
    this.createCalendarData();
  }

  private getDaysInMonth(year: number, month: number): number {
    const key = `${year}-${month}`;
    if (!this.daysInMonthCache.has(key)) {
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      this.daysInMonthCache.set(key, daysInMonth);
    }
    return this.daysInMonthCache.get(key)!;
  }

  private createCalendarData(): void {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    const firstDayInMonth = this.getSelectedDate(year, month, 1).getDay();
    const lastDayPreviousMonth = this.getDaysInMonth(year, month - 1);

    this.calendarElements = Array.from(
      { length: firstDayInMonth },
      (_, index) => ({
        day: lastDayPreviousMonth - index,
        isCurrentDay: false,
        isCurrentMonth: false,
      })
    );

    const lastDayInMonth = this.getDaysInMonth(year, month);
    const todayFormattedDate = this.formatDate(this.currentDate);
    this.calendarElements.push(
      ...Array.from({ length: lastDayInMonth }, (_, index) => {
        const evaluatedFormattedDate = this.formatDate(
          this.getSelectedDate(year, month, index + 1)
        );

        const isCurrentDay = this.isCurrentDay(
          todayFormattedDate,
          evaluatedFormattedDate
        );

        return {
          day: index + 1,
          isCurrentDay,
          isCurrentMonth: true,
        };
      })
    );

    const totalDaysNeeded = this.totalItems - this.calendarElements.length;

    this.calendarElements.push(
      ...Array.from({ length: totalDaysNeeded }, (_, index) => ({
        day: index + 1,
        isCurrentDay: false,
        isCurrentMonth: false,
      }))
    );
  }

  private formatDate(date: Date): string {
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  }

  private getSelectedDate(year: number, month: number, day: number): Date {
    return new Date(year, month, day);
  }

  private isCurrentDay(todayDate: string, comparisonDate: string): boolean {
    return todayDate === comparisonDate;
  }

  public openDialog() {
    console.log('asd');
  }
}

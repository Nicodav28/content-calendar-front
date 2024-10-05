import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NCalendar } from '../../model/calendar.model';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [MatButtonModule],
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
  public calendarElements: any[] = new Array(42).fill(1);

  public openDialog() {
    console.log('asd');
  }
}

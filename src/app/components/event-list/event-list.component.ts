
import { Component, OnInit, Signal } from '@angular/core';
import { AppEvent } from '../../models/event.model';
import { EventService } from '../../services/event.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { SportEventFormComponent } from '../sport-event-form/sport-event-form.component';
import { MusicEventFormComponent } from '../music-event-form/music-event-form.component';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ["./event-list.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    SportEventFormComponent,
    MusicEventFormComponent,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatCellDef,
    MatHeaderCellDef,
    MatOption,
    MatSelect,
    AsyncPipe
  ]
})
export class EventListComponent implements OnInit {
  events!: Signal<AppEvent[]>;
  displayedColumns: string[] = ['name', 'description', 'location', 'eventType', 'participants', 'genre', 'actions'];
  showAddForm = false;
  // Добавляем переменную для хранения выбранного типа мероприятия
  selectedEventType: 'sport' | 'music' = 'sport'; // По умолчанию "спортивное"

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    // Подписка на сигнал для получения списка мероприятий
    this.events = this.eventService.events;
  }

  // Метод для отображения/скрытия формы добавления мероприятия
  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }

  // Метод для обработки добавленного мероприятия
  onEventAdded(event: AppEvent) {
    this.eventService.addEvent(event);
    this.showAddForm = false;
  }

  // Метод для удаления мероприятия
  deleteEvent(id: number) {
    this.eventService.deleteEvent(id);
  }
}

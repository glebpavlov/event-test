import { Injectable, Signal, signal } from '@angular/core';
import { AppEvent } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private _events = signal<AppEvent[]>([]);

  get events(): Signal<AppEvent[]> {
    return this._events.asReadonly();
  }

  addEvent(event: AppEvent) {
    this._events.update((events) => [...events, event]);
  }

  updateEvent(updatedEvent: AppEvent) {
    this._events.update((events) =>
        events.map((event) => (event.id === updatedEvent.id ? updatedEvent : event))
    );
  }

  deleteEvent(id: number) {
    this._events.update((events) => events.filter((event) => event.id !== id));
  }
}

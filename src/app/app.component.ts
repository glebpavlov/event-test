
import { Component } from '@angular/core';
import { EventListComponent } from './components/event-list/event-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [EventListComponent]
})
export class AppComponent {}

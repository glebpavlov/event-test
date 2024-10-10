import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseEventFormComponent } from '../base-event-form/base-event-form.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sport-event-form',
  templateUrl: './sport-event-form.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule // Необходим для работы с формами
  ]
})
export class SportEventFormComponent extends BaseEventFormComponent {
  constructor(fb: FormBuilder) {
    super(fb);

    // Добавляем поле "Количество участников" для спортивных мероприятий
    this.eventForm.addControl('participants', this.fb.control('', Validators.required));
  }
}

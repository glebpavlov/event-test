
import { Component } from '@angular/core';
import { BaseEventFormComponent } from '../base-event-form/base-event-form.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music-event-form',
  templateUrl: './music-event-form.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule // Для работы с формами
  ]
})
export class MusicEventFormComponent extends BaseEventFormComponent {
  constructor(fb: FormBuilder) {
    super(fb);

    // Добавляем поле "Жанр музыки" для музыкальных мероприятий
    this.eventForm.addControl('genre', this.fb.control('', Validators.required));
  }
}

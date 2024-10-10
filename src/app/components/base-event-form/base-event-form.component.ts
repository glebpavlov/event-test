import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppEvent } from '../../models/event.model';

@Component({
  standalone: true,
  template: ''
})
export class BaseEventFormComponent {
  @Input() event!: AppEvent;
  @Output() submitForm = new EventEmitter<AppEvent>();

  eventForm: FormGroup;

  constructor(protected fb: FormBuilder) {
    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.eventForm.valid) {
      // id берем из даты
      this.submitForm.emit({...this.eventForm.value, id: +new Date()});
    }
  }
}

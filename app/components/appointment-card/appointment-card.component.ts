import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppointmentModel, IAppointmentModel } from '../../models/appointment.model';

@Component({
  selector: 'app-appointment-card',
  templateUrl: './appointment-card.component.html',
  styleUrl: './appointment-card.component.scss'
})
export class AppointmentCardComponent implements OnInit {
  appointmentdata: IAppointmentModel[] = [];
  @Input() appointment: IAppointmentModel = new AppointmentModel();
  @Output() editClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() deleteClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  openEditDialog() {
    this.editClicked.emit();
  }

  onDelete() {
    this.deleteClicked.emit(this.appointment.id);
  }
}
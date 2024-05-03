import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAppointmentModel } from '../../models/appointment.model';
import moment from 'moment';

@Component({
  selector: 'app-appointment-edit',
  templateUrl: './appointment-edit.component.html',
  styleUrl: './appointment-edit.component.scss'
})
export class AppointmentEditComponent implements OnInit {

  @Input() appointmentUserData: IAppointmentModel  | null = null;
  @Output() updateClicked: EventEmitter<IAppointmentModel> = new EventEmitter<IAppointmentModel>();
  EditForm!: FormGroup;
  @Output() saveClicked: EventEmitter<IAppointmentModel> = new EventEmitter<IAppointmentModel>();


  constructor(private fb: FormBuilder) {
    this.EditForm = this.fb.group({
      name: ['', Validators.required],
      appointment: ['', Validators.required],
      status: ['', Validators.required],
      facility: ['', Validators.required],
      resource: ['', Validators.required],

    });
  }

  ngOnInit(): void {
    if (this.appointmentUserData) {
      this.EditForm.patchValue({
        name: this.appointmentUserData.name,
        appointment:new Date(this.appointmentUserData.appointment || ''),
        status: this.appointmentUserData.status,
        facility: this.appointmentUserData.facility,
        resource: this.appointmentUserData.resource
      });
      
    }

  }

  onUpdate() {
    if (this.EditForm.valid) {
      let appointmentData: IAppointmentModel;

      if (this.appointmentUserData) {
        appointmentData = {
          ...this.appointmentUserData,
          name: this.EditForm.get('name')?.value,
          resource: this.EditForm.get('resource')?.value,
          facility: this.EditForm.get('facility')?.value,
          status: this.EditForm.get('status')?.value,
          appointment: this.formatAppointmentDate(this.EditForm.get('appointment')?.value)
        };
        this.updateClicked.emit(appointmentData);
      } else {
        const formData: IAppointmentModel = {
          ...this.EditForm.value,
          appointment: this.formatAppointmentDate(this.EditForm.get('appointment')?.value)
        };
        this.saveClicked.emit(formData);
      }
    } else {
      alert('Error in updating the data');
    }
  }

  formatAppointmentDate(date: string): string {
    console.log(date);
    return moment(date).format('YYYY-MM-DDTHH:mm:ss');
  }
  
}
























































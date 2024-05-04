import { Component, OnInit } from '@angular/core';
import { IAppointmentModel } from '../../models/appointment.model';
import { Store, select } from '@ngrx/store';
import * as DataActions from '../../../app/data.actions';
import { AppointmentSelector } from '../../appointment.selector';


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss'
})
export class AppointmentListComponent implements OnInit {
  appointmentList: IAppointmentModel[] = [];
  isEditable: boolean = false;
  selectedAppointment: IAppointmentModel | null = null;
  
  
  constructor( private store: Store, private store1: Store<IAppointmentModel[]>) { }

  ngOnInit(): void {
    this.store1.pipe(select(AppointmentSelector)).subscribe((data: any) => {
      this.appointmentList = [...data.appointmentList.appointmentList];
    });

  }
  openEditDialog(appointment: IAppointmentModel) {
    this.selectedAppointment = appointment;
    this.isEditable = true;
    

  }
  onUpdateAppointment(updatedData: IAppointmentModel) {
    const index = this.appointmentList.findIndex(appointment => appointment.id === updatedData.id);
    if (index !== -1) {
      this.appointmentList[index] = updatedData;
      this.store.dispatch(DataActions.updateData({ updatedAppointment: updatedData }));

    }
    this.isEditable = false;
  }

  onDeleteAppointment(id: string) {
    this.store.dispatch(DataActions.deleteData({ id }));

  }
  OnAdd() {
    this.selectedAppointment = null;
    this.isEditable = true;

  }

  onSaveAppointment(formData: IAppointmentModel) {
    this.store.dispatch(DataActions.addData({ appointment: formData }))
    this.isEditable = false;
  }

}
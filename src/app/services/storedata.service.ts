import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as DataActions from '../data.actions';
import { IAppointmentModel } from '../models/appointment.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoredataService {

  constructor(private store: Store) { }

  Updatedata(updatedData: IAppointmentModel): Observable<IAppointmentModel> {
    this.store.dispatch(DataActions.updateData({ updatedAppointment: updatedData }));
    return of(updatedData);
  }

  saveAppointment(formData: IAppointmentModel): Observable<IAppointmentModel> {
    this.store.dispatch(DataActions.addData({ appointment: formData }));
    return of(formData);

  }
}










































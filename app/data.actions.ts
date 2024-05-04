
import { createAction, props } from '@ngrx/store';
import { IAppointmentModel } from './models/appointment.model';

export const getData=createAction('[Data] Get Appointment data');
export const postData = createAction('[Data] Post Data', props<{ appointmentList: IAppointmentModel[] }>());
export const updateData = createAction('[Data] Update Data', props<{ updatedAppointment: IAppointmentModel }>());
export const deleteData = createAction('[Data] Delete Data', props<{ id: string }>());
export const addData = createAction('[Data] Add Data', props<{ appointment: IAppointmentModel }>()); 

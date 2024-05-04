import { createReducer, on } from '@ngrx/store';
import * as DataActions from './data.actions';
import { IAppointmentModel } from './models/appointment.model';

export interface DataState {
    appointmentList: IAppointmentModel[];
}

export const initialState: DataState = {
    appointmentList: []
};

export const dataReducer = createReducer(
  initialState,

  on(DataActions.postData, (state, { appointmentList }) => ({
    ...state,
    appointmentList: appointmentList 
  })),

  on(DataActions.getData, (state) => ({
    ...state,
  })),

  on(DataActions.updateData, (state, { updatedAppointment }) => ({
    ...state,
    appointmentList: state.appointmentList.map(appointment =>
      appointment.id === updatedAppointment.id ? updatedAppointment : appointment
    )
  })),

  on(DataActions.deleteData, (state, { id }) => ({
    ...state,
    appointmentList: state.appointmentList.filter(appointment => appointment.id !== id)
  })),

  on(DataActions.addData, (state, { appointment }) => ({
    ...state,
    appointmentList: [...state.appointmentList, appointment] 
  })),
  );

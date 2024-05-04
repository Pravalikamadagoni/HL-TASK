import { createSelector } from "@ngrx/store";
import { IAppointmentModel } from "./models/appointment.model";

export const selectFeature = (state: IAppointmentModel[])=>state;
export const AppointmentSelector = createSelector(
  selectFeature,
  (state) => state
);

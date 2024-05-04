import { Type } from "@angular/core";
import { IAppointmentModel } from "../models/appointment.model";

export class DynamicItem {
    constructor(public component: Type<any>, public appointment: IAppointmentModel) { }
}
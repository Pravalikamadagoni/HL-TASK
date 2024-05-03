import { Observable, of} from "rxjs";
import { IAppointmentModel } from "../models/appointment.model";

export const dynamicServiceStub={
    getAppointmentsById():Observable<IAppointmentModel[]>{
        return of([]);

    }
}
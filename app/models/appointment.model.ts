export interface IAppointmentModel {
    id: string;
    status: string;
    appointment?: string;
    appointmentEnd: string;
    name: string;
    patientId: string;
    profileNo: string;
    appType: string;
    resource: string;
    reason: string;
    facility: string;
    facilityId: string;
    externalSystemAppointmentId: string;
    appointmentStatus?: string;
    resourceName: string;
    appointmentTypeId: string;
    duration: string;
    isHistoricalAppointment: boolean;
    isChattingEnabled: boolean;
    visitNumber?: string;
    hasEVHistory?: boolean;
}

export class AppointmentModel implements IAppointmentModel {
    id: string = '';
    status: string = '';
    appointment?: string = '';
    appointmentEnd: string = '';
    name: string = '';
    patientId: string = '';
    profileNo: string = '';
    appType: string = '';
    resource: string = '';
    reason: string = '';
    facility: string = '';
    facilityId: string = '';
    externalSystemAppointmentId: string = '';
    appointmentStatus?: string = '';
    resourceName: string = '';
    appointmentTypeId: string = '';
    duration: string = '';
    isHistoricalAppointment: boolean = false;
    isChattingEnabled: boolean = false;
    visitNumber?: string = '';
    hasEVHistory?: boolean = false;
}
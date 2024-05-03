import { IAppointmentModel } from "../models/appointment.model";

export class appointmentresponseMock {
    static appointmentListMock(): IAppointmentModel[] {
        return [
            {
                appType: "JOEL TASK ASSOCIATED [L]",
                appointment: "2024-04-04T06:00:00-05:00",
                appointmentEnd: "2024-04-04T06:15:00-05:00",
                appointmentStatus: '',
                appointmentTypeId: '',
                duration: '',
                externalSystemAppointmentId: '',
                facility: "TRUBRIDGE COMMUNITY HOSPITAL",
                facilityId: "id-osfac.d4f07008-0ccb-46ad-9d2f-32b035a5f78c",
                hasEVHistory: false,
                id: "id-1.1.11818",
                name: "PADMANABAN SUDHARSANAN",
                patientId: "Patient/id-1.1.5943",
                profileNo: "id-1.1.5943",
                resource: "JOEL'S LOCATION",
                resourceName: '',
                status: "Booked",
                visitNumber: '',
                reason:'',
                isChattingEnabled:false,
                isHistoricalAppointment: false

            },

            {
                appType: "BUNKIE CHRONIC HOSPITAL",
                appointment: "2024-04-04T08:45:00-05:00",
                appointmentEnd: "2024-04-04T09:00:00-05:00",
                appointmentStatus: '',
                appointmentTypeId: '',
                duration: '',
                externalSystemAppointmentId: '',
                facility: "TRUBRIDGE COMMUNITY HOSPITAL",
                facilityId: "id-osfac.d4f07008-0ccb-46ad-9d2f-32b035a5f78c",
                hasEVHistory: false,
                id: "id-1.1.11975",
                name: "jo mark",
                patientId: "Patient/id-1.1.6679",
                profileNo: "id-1.1.5943",
                resource: "Dawns Bunkie Test",
                resourceName: '',
                status: "Cancelled",
                visitNumber: '',
                reason:'',
                isHistoricalAppointment:false,
                isChattingEnabled:false
            }
        ]

    }
}
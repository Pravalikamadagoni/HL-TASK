import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ConstantsModel } from './models/constants.model';
import { IAppointmentModel } from './models/appointment.model';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { Store } from '@ngrx/store';
import * as DataActions from '../app/data.actions';
import { DynamicserviceService } from './services/dynamic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'sample-data';
  appointmentList: IAppointmentModel[] = [];
  @ViewChild('card', { read: ViewContainerRef })
  card!: ViewContainerRef;
  appointmentIds: string[] = ConstantsModel.appointmentIds;
  constructor(private dynamicService: DynamicserviceService, private componentFactoryResolver: ComponentFactoryResolver, private store: Store) {

  }

  ngOnInit(): void {
    this.getData();

  }
  renderdynamicComponet() {
    const dynamicComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AppointmentListComponent);
    const componentRef = this.card.createComponent(dynamicComponentFactory);

  }

  getData() {
    const appointmentData = [];
    for (let i = 0; i < 5; i++) {
      const appointments = this.appointmentIds.splice(0, 10);
      if (appointments.length) {
        appointmentData.push(this.dynamicService.getAppointmentsById(appointments));
      }
    }

    if (appointmentData.length) {
      forkJoin(appointmentData)
        .subscribe((appointmentData1: IAppointmentModel[][]) => {
          appointmentData1.forEach(data => {
            this.appointmentList = this.appointmentList.concat(data);
          })
          this.store.dispatch(DataActions.postData({ appointmentList: this.appointmentList }));
          this.renderdynamicComponet();
        });
    }
  }

}


























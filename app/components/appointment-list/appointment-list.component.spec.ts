import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentListComponent } from './appointment-list.component';
import { DynamicserviceService } from '../../services/dynamic.service';
import { dynamicServiceStub } from '../../stub/dynamic-service.stub';
import { appointmentresponseMock } from '../../mock/appointment-response.mock';

describe('AppointmentListComponent', () => {
  let component: AppointmentListComponent;
  let fixture: ComponentFixture<AppointmentListComponent>;
 let appointmentMock=appointmentresponseMock.appointmentListMock();
 let dynamicservice:DynamicserviceService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentListComponent],
      providers:[
        {provide:DynamicserviceService,useValue:dynamicServiceStub}
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentListComponent);
    component = fixture.componentInstance;
    dynamicservice=fixture.debugElement.injector.get(DynamicserviceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

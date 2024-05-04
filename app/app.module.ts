import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentCardComponent } from './components/appointment-card/appointment-card.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { CardModule } from 'primeng/card';
import { HttpClientModule  } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { AppointmentEditComponent } from './components/appointment-edit/appointment-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { dataReducer } from './data.reducer';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from "primeng/calendar";
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentCardComponent,
    AppointmentListComponent,
    AppointmentEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ appointmentList: dataReducer }),
    InputTextModule,
    DialogModule,
    ButtonModule,
    CalendarModule,
    DatePipe
  ],
  providers: [DatePipe,
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

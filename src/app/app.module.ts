import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarSchedulerComponent } from './calendar-scheduler/calendar-scheduler.component';

import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeFormComponent } from './employee/employee-form/employee-form.component';
import { FormsModule } from '@angular/forms';

import { DemoModule } from './calendar-example/demo/module';


import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SchedulerModule } from 'angular-calendar-scheduler';
import { TestCalendarComponent } from './calendar-example/test-calendar/test-calendar.component';


import { AngularBootstrapMaterialModule } from './angular-bootstrap-material/angular-bootstrap-material.module';






@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    CalendarSchedulerComponent,
    DashboardComponent,
    EmployeeComponent,
    EmployeeFormComponent,
    TestCalendarComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    DemoModule,
    AngularBootstrapMaterialModule,
    //SchedulerModule.forRoot({ locale: 'en', headerDateFormat: 'daysRange' }),
    //CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

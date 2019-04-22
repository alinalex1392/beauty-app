import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CalendarSchedulerComponent } from './calendar-scheduler/calendar-scheduler.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';


import { TestCalendarComponent } from './calendar-example/test-calendar/test-calendar.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'test', component: TestCalendarComponent },
  { path: 'agenda', component: CalendarSchedulerComponent },
  { path: 'angajati', component: EmployeeComponent },
  { path: '**', component: DashboardComponent },

];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

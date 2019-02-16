import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckinComponent } from '../checkin/checkin.component';
import { ReportInjuryComponent } from '../report-injury/report-injury.component';

const routes: Routes = [
  {
      path: '',
      component: CheckinComponent,
  },
  {
    path: 'home',
    component: CheckinComponent,
  },
  {
      path: 'report',
      component: ReportInjuryComponent,
  },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnroleesRoutingModule } from './enrolees-routing.module';
import { EnroleesComponent } from './enrolees.component';

@NgModule({
  declarations: [EnroleesComponent],
  imports: [
    CommonModule,
    EnroleesRoutingModule
  ]
})
export class EnroleesModule { }

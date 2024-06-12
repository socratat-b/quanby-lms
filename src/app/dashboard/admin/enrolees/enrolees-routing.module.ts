import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnroleesComponent } from './enrolees.component';

const routes: Routes = [
  {
    path: '',
    component: EnroleesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnroleesRoutingModule {}

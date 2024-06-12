import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'media-manager',
        loadChildren: () =>
          import('./admin/media-manager/media-manager.module').then(
            (m) => m.MediaManagerModule
          ),
      },
      {
        path: 'students',
        loadChildren: () =>
          import('./admin/students/students.module').then(
            (m) => m.StudentsModule
          ),
      },
      {
        path: 'instructors',
        loadChildren: () =>
          import('./admin/instructors/instructors.module').then(
            (m) => m.InstructorsModule
          ),
      },
      // Add other routes here directly
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

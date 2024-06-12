// src/app/dashboard/dashboard.component.ts
import { Component } from '@angular/core';
import { routes } from '../shared/service/routes/routes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public routes = routes;
}

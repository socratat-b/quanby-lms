import { Component } from '@angular/core';
import { routes } from '../shared/service/routes/routes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public routes = routes;
  public searchQuery = '';
  public isOpen: { [key: string]: boolean } = {
    media: false,
    users: false,
    settings: false,
    noMainRoute: false
  };

  toggleDropdown(section: string) {
    this.isOpen[section] = !this.isOpen[section];
  }

  searchRoutes() {
    // Logic to search and navigate to routes based on searchQuery
    const matchedRouteKey = Object.keys(this.routes).find((key) => key.toLowerCase().includes(this.searchQuery.toLowerCase()));
    if (matchedRouteKey) {
      // Navigate to the matched route
    }
  }
}

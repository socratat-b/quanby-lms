import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Define the routes for the application
const routes: Routes = [
  {
    // Default route, loads the main components module
    path: '',
    loadChildren: () =>
      import('./components/components.module').then((m) => m.ComponentsModule),
  },
  {
    // Route for authentication-related pages (e.g., login, signup)
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    // Route for error pages (e.g., 404 not found, 500 server error)
    path: 'error',
    loadChildren: () =>
      import('./error/error.module').then((m) => m.ErrorModule),
  },
  {
    // Wildcard route, redirects any unknown paths to the 404 error page
    path: '**',
    redirectTo: 'error/404',
  },
];

@NgModule({
  // Import RouterModule and apply the routes configuration
  imports: [RouterModule.forRoot(routes)],
  // Export RouterModule so it's available throughout the application
  exports: [RouterModule],
})
export class AppRoutingModule {}

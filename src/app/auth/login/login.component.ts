// src/app/auth/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from 'src/app/shared/service/api-supabase/supabase.service';
import { routes } from 'src/app/shared/service/routes/routes';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/service/data/data.service';
import { welcomeLogin } from 'src/app/models/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public routes = routes;
  password = 'password';
  show = true;
  email: string = '';
  passwordInput: string = '';
  errorMessage: string | null = null;

  public welcomeLogin: welcomeLogin[] = [];

  public welcomeLoginOwlOptions: OwlOptions = {
    margin: 25,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 4,
      },
    },
  };

  constructor(
    private dataService: DataService,
    private supabaseService: SupabaseService,
    public router: Router
  ) {
    this.welcomeLogin = this.dataService.welcomeLogin;
  }

  togglePasswordVisibility() {
    this.password = this.password === 'password' ? 'text' : 'password';
    this.show = !this.show;
  }

  async login() {
    try {
      const user = await this.supabaseService.signIn(
        this.email,
        this.passwordInput
      );
      if (user) {
        this.router.navigate(['/dashboard']);
      }
    } catch (error) {
      this.errorMessage = 'An unknown error occurred';
    }
  }
}

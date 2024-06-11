import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { passwordResponse, register } from 'src/app/models/register.model';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
  public routes = routes;
  public registerForm:register={
    img: undefined,
    content1: undefined,
    content2: undefined,
    paragraph: undefined
  }
  public passwordResponse:passwordResponse={};

  public register: register[] = [];

  password= 'password';
  show = true;

  public registerOwlOptions: OwlOptions = {
    margin: 25,
    nav: true,
    loop: true,
    responsive: {
        0: {
          items: 1
        },
        768 : {
          items: 3
        },
        1170: {
          items: 4
        }
    },
  };

  constructor(private DataService: DataService) {
    this.register = this.DataService.register;
  }

 
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = false;
    } else {
      this.password = 'password';
      this.show = true;
    }
  }

  registerFormCustom: {
    password: string;
    confirmPassword: string;
  } = {
    password: '',
    confirmPassword: '',
  };
 
  public onChangePassword(password:string){
    if(password.match(/^$|\s+/)) {
      this.passwordResponse.passwordResponseText = "whitespaces are not allowed"
      this.passwordResponse.passwordResponseImage = ""
      this.passwordResponse.passwordResponseKey = ''
      return
    }
    if(password.length == 0){
      this.passwordResponse.passwordResponseText = ""
      this.passwordResponse.passwordResponseImage = ""
      this.passwordResponse.passwordResponseKey = ''
      return
    }
    if (password.length < 8) {
      this.passwordResponse.passwordResponseText = "Weak. Must contain at least 8 characters"
      this.passwordResponse.passwordResponseImage = "assets/img/icon/angry.svg"
      this.passwordResponse.passwordResponseKey = '0'
    } else if (password.search(/[a-z]/) < 0) {
      this.passwordResponse.passwordResponseText = "Average. Must contain at least 1 upper case and number"
      this.passwordResponse.passwordResponseImage = "assets/img/icon/anguish.svg"
      this.passwordResponse.passwordResponseKey = '1'
    } else if(password.search(/[A-Z]/) < 0) {
      this.passwordResponse.passwordResponseText = "Average. Must contain at least 1 upper case and number"
      this.passwordResponse.passwordResponseImage = "assets/img/icon/anguish.svg"
      this.passwordResponse.passwordResponseKey = '1'
    } else  if (password.search(/[0-9]/) < 0) {
      this.passwordResponse.passwordResponseText= "Average. Must contain at least 1 upper case and number"
      this.passwordResponse.passwordResponseImage = "assets/img/icon/anguish.svg"
      this.passwordResponse.passwordResponseKey = '1'
    } else  if (password.search(/(?=.*?[#?!@$%^&*-])/) < 0) {
      this.passwordResponse.passwordResponseText = "Almost. Must contain special symbol"
      this.passwordResponse.passwordResponseImage = "assets/img/icon/smile.svg"
      this.passwordResponse.passwordResponseKey = '2'
    }else {
      this.passwordResponse.passwordResponseText = "Awesome! You have a secure password."
        this.passwordResponse.passwordResponseImage = "assets/img/icon/smile.svg"
         this.passwordResponse.passwordResponseKey = '3'
     }
  }
  typingStarted = false;

  onInputChange() {
    this.typingStarted = true;
  }
}

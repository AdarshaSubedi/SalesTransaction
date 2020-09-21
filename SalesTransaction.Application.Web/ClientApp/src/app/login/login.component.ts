import { LoginService } from './login.service';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


  onLogin() {
    const loginData = this.loginForm.value;
    console.log(loginData);
    this.loginService.getLogin(loginData).subscribe(response =>{
      // console.log(response);
      if (response){
        window.prompt('Logged in');
      } else {
        window.prompt('error logging in')
      }
    });
  }

  ngAfterViewInit(): void {
    console.log('viewinit called');
  }
  ngOnDestroy(): void {
    console.log('login method destroyed');
  }

}

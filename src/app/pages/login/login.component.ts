import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Profile {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  logo = './../assets/img/fidens_asistencia.jpg';
  loadingSpinner = false;
  selectedValue: string = '';

  /** Reactives Forms */
  form: FormGroup;

  profiles: Profile[] = [
    {value: 'steak-0', viewValue: 'Administrador'},
    {value: 'pizza-1', viewValue: 'Profile 1'},
    {value: 'tacos-2', viewValue: 'Profile 2'},
  ];

  constructor(private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        user: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
   }

  ngOnInit(): void {
  }

  login() {
    console.log(this.form);
    let userVal = this.form.value.user;
    let pwdVal = this.form.value.password;
    if( userVal != '' && pwdVal != '')
    {
      this.redirect();
    }
  }

  redirect(){
    this.loadingSpinner = true;
    setTimeout(() => {
        this.loadingSpinner = false;
        this.router.navigateByUrl('/dashboard');
    }, 2000)
  }
  
}

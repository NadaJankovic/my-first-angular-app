import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth-service/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public registerForm!: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _auth: AuthService
  ) {  
  }

  login() {
    this.registerForm.markAllAsTouched();
    if (!this.registerForm.valid) {
      this._router.navigateByUrl("/login");
    }
    this._auth.login(this.registerForm.value.user, this.registerForm.value.password).subscribe(
      (result) => {
        this._router.navigateByUrl("/protected/homePage");
      }, (err: Error) => {
        alert(err.message);
      });

  }

  ngOnInit(): void {
 console.log(this._auth.checkIfLoggedIn());
 if(this._auth.checkIfLoggedIn()) {
  this._router.navigateByUrl('/protected/homePage')
 }
    this.registerForm = this._fb.group({
      user: new FormControl('', [
        Validators.required,
        Validators.minLength(4)],
        ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)])
    })
  }

}

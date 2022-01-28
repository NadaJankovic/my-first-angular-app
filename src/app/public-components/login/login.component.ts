import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  login () {
    const auth = this._auth.getUserNameAndPassword(this.registerForm.value.user, this.registerForm.value.password);
    if(auth) {
      this._router.navigateByUrl("/protected/homePage");
    }
  }

  ngOnInit(): void {
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

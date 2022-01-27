import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public registerForm!: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _router: Router
  ) {  
  }

  login () {
this._router.navigateByUrl("/protected/homePage");
  }

  ngOnInit(): void {
    this.registerForm = this._fb.group({
      user: new FormControl('', [
        Validators.required,
        Validators.minLength(2)],
        ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5)]),
      id: new FormControl('')
    })
  }

}

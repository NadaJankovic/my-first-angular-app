import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth-service/auth.service';
import { SharedItemsDataService } from 'src/app/services/local-storage-service/shared-items-data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;
  userAlreadyExists!: boolean;
  constructor(
    private _fb: FormBuilder,
    private _auth: AuthService,
    private _sharedService: SharedItemsDataService,
    private _router: Router
  ) { 
    this.userAlreadyExists = false;
  }

  ngOnInit(): void {
    this.registerForm = this._fb.group({
      user: new FormControl('', [
        Validators.required,
        Validators.minLength(2)],
      ),
      email: new FormControl( "",[
        Validators.required,
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      ],
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5)]),
      confirmPassword: new FormControl('', [
        Validators.required
      ]),
      loggedIn: new FormControl(false)
    }, {
      validator: this.confirmedValidator('password', 'confirmPassword')
    })
  }

  submit() {
  const allUsers = this._sharedService.getUsers();
  const checkIfUserExists = allUsers.find( el => el.user === this.registerForm.value.user ||  el.email === this.registerForm.value.email );
console.log(!!checkIfUserExists)
  if (checkIfUserExists === undefined) {
    this.userAlreadyExists= false;
    this.registerForm.value.loggedIn = false;
    this._sharedService.saveUser(this.registerForm.value.user,this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.loggedIn);
    this.registerForm.reset();
  }
   if(!!checkIfUserExists){
    this.userAlreadyExists = true;
   }
  }

  confirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
}

return () {
  this._router.navigateByUrl("/login");
}

}

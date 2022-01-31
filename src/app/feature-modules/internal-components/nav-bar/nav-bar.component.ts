import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth-service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor(
    private _router: Router,
    private _auth: AuthService
  ) { }

  logout () {
   this._auth.logOutUser(); 
  }

  ngOnInit(): void {
    // if(!this._auth.authStatus) {
    //   this._router.navigateByUrl("/login");
    // }
  }

}

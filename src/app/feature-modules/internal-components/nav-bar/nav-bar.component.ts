import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor(
    private _router: Router
  ) { }
  logout () {
      this._router.navigateByUrl("/login");
  }
  ngOnInit(): void {
  }

}

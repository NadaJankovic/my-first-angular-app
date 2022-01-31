import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Observable, of, throwError } from 'rxjs';

const STORAGE_KEY = 'token';
const USERS_KEY = 'users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authStatus!: boolean;

  constructor(@Inject(LOCAL_STORAGE) private _storage: StorageService,
    private _router: Router) {
  }

  setToken(token: string) {
    this._storage.set(STORAGE_KEY, token);
  }

  getToken(): string {
    return this._storage.get(STORAGE_KEY);
  }

  deleteToken() {
    this._storage.remove(STORAGE_KEY);
  }

  logOutUser() {
    const getUsers = this._storage.get(USERS_KEY);
    const updatedUser = getUsers.map((el:any) => {
      if(el.loggedIn === true){
        return {...el, loggedIn:false};
      }
      return el;
    })
    this._storage.set(USERS_KEY,updatedUser);
      this.deleteToken();
      this._router.navigateByUrl("/login");
  }

  checkIfLoggedIn() {
    return this._storage.get(STORAGE_KEY) !== undefined;

  }

  login(user: string, password: string): Observable<any> {
    const getUsers = this._storage.get(USERS_KEY);
    const updatedUser = getUsers.map((el: any) => {
      if (el.user === user && el.password === password) {
        return {...el, loggedIn :true}
      }
    return el;
    });
  
    this._storage.set(USERS_KEY, updatedUser);
    if (updatedUser) {
      this.setToken('1Hlfm57dHfbdDe546egddte');
      return of(updatedUser);
    }
    return throwError(new Error('Failed to login'));
  }

}

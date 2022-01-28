import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
authStatus!: boolean;
  constructor() { 
  }



  getUserNameAndPassword(userName:string, password:string):boolean{
   if (userName === 'user' && password === 'user') {
     return this.authStatus = true;
   
   }
   return this.authStatus = false;
  
 }
}

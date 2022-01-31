import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';


const STORAGE_KEY = 'to-do-list';
const USERS_KEY = 'users';

/* export interface Item {
  title: string;
}
 */
@Injectable({
  providedIn: 'root'
})
export class SharedItemsDataService {
  itemList: any;
  users: any;


  constructor(@Inject(LOCAL_STORAGE) private _storage: StorageService) {
    this.itemList = [];
    this.users = [];
   };

 public getAllItems (): any[] {
return this.itemList = this._storage.get(STORAGE_KEY) || [];
  }

 public addNewItem(title: string, content: string): any {
    this.itemList.push({
      title: title,
      content: content,
      id: Math.random().toString()
    })
    return this._storage.set(STORAGE_KEY, this.itemList);
  }

 public editItem (title: string, content: string, id:string):any {
    const item =this.itemList.map((el: { id: string; }) => el.id === id ?
    {...el, title:title, content:content, id: id} :el);
    return this._storage.set(STORAGE_KEY, item);
  }

 public delete( id: string): any {
   const deletedItem = this.itemList.filter((el: { id: string; }) => el.id !== id);
  return this._storage.set(STORAGE_KEY, deletedItem);
  }


  public getItemById(id: string): any {
    const getAllItems = this._storage.get(STORAGE_KEY);
   const getItem = getAllItems.filter((el: { id: any; }) => el.id == id);
   return getItem;
  }

  getUsers():any[]{
    return this.users = this._storage.get(USERS_KEY) || [];
  }

  saveUser(userName: string, email: string, password: string, loggedIn:boolean): void {
    this.users.push({
      user: userName,
      email: email,
      password: password,
      loggedIn:loggedIn
    })
    this._storage.set(USERS_KEY, this.users);
 
}
    
}

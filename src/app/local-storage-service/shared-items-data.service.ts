import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';


const STORAGE_KEY = 'to-do-list';

/* export interface Item {
  title: string;
}
 */
@Injectable({
  providedIn: 'root'
})
export class SharedItemsDataService {
  itemList: any;


  constructor(@Inject(LOCAL_STORAGE) private _storage: StorageService) {
    this.itemList = [];
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
    
}

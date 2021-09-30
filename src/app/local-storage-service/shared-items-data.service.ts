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

  getAllItems (): any[] {
return this.itemList = this._storage.get(STORAGE_KEY) || [];
  }

  addNewItem(title: string , content: string): any {
      this.itemList.push({
        title: title,
        content: content,
        id: Math.random().toString()
      })
      return this._storage.set(STORAGE_KEY, this.itemList);
    }

    updateItem(title: string , content: string, id:string): any {
      this.itemList.push({
        title: title,
        content: content,
        id:id
      })
      return this._storage.set(STORAGE_KEY, this.itemList);
    }
    
}

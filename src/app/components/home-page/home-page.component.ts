
import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import {  SharedItemsDataService } from 'src/app/local-storage-service/shared-items-data.service';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { Item} from '../models/item';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  public allItems:any;

  constructor(public activatedRoute: ActivatedRoute,
    private _router: Router,
    private shared_Data_service: SharedItemsDataService) { 
      this.allItems =this.shared_Data_service.getAllItems(); 
  }

 public editItem(itemId:any): void {
  this._router.navigateByUrl(`/editItem/${itemId}`,{state:{id: itemId}});
  }

  public deleteItem(itemId: string) :void {
  const item = this.shared_Data_service.delete(itemId);
  this.allItems =this.shared_Data_service.getAllItems(); 
  }

}

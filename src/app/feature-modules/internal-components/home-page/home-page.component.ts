
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import {  SharedItemsDataService } from '../../../local-storage-service/shared-items-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public allItems:any;

  constructor(public activatedRoute: ActivatedRoute,
    private _router: Router,
    private shared_Data_service: SharedItemsDataService) { 
      this.allItems =[]; 
  }

 ngOnInit () {
  this.allItems = this.shared_Data_service.getAllItems();
 }

 public editItem(itemId:any): void {
  this._router.navigateByUrl(`/protected/editItem/${itemId}`);
  }

  public deleteItem(itemId: string) :void {
  const item = this.shared_Data_service.delete(itemId);
  this.allItems =this.shared_Data_service.getAllItems(); 
  }

}

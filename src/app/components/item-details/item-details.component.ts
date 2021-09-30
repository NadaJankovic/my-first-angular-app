
import { Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';
import { SharedItemsDataService } from 'src/app/local-storage-service/shared-items-data.service';
import { Item} from '../models/item';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})

export class ItemDetailsComponent implements OnInit, OnChanges {
 item : Item={
  titleName: window.history.state.item.title,
  content:  window.history.state.item.content,
  id: window.history.state.item.id
};

  constructor( private _router : Router, 
    private shared_Data_service: SharedItemsDataService) { 
  
  }
  ngOnChanges (changes: SimpleChanges) {
    console.log('details on change', changes)
  
  }
 
  ngOnInit(): void {
    console.log('details,on intit item', this.item )
  }

 public returnToHomePage (): void {
  this._router.navigateByUrl("/homePage", { skipLocationChange: false });
  }

  public editItem(item: any): void {
   this._router.navigate(['/addNewItem'], {state:{data:{item}}})
  }


}

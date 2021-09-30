import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  SharedItemsDataService } from 'src/app/local-storage-service/shared-items-data.service';
import { Item} from '../models/item';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  public allItems:any;

  constructor(public activatedRoute: ActivatedRoute,
    private shared_Data_service: SharedItemsDataService) { 
      this.allItems=this.shared_Data_service.getAllItems();
  }
 
  ngOnInit(): void {
    this.allItems =this.shared_Data_service.getAllItems();
  }

}

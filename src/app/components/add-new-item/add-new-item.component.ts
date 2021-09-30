import { Component, OnInit} from '@angular/core';
import {  Router } from '@angular/router';
import { SharedItemsDataService } from 'src/app/local-storage-service/shared-items-data.service';
import { Item } from '../models/item'

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.scss']
})

export class AddNewItemComponent implements OnInit{
  item: Item = {
    titleName:'',
    content:'',
    id:''
  }
  errorText = '';

  constructor(
    private router: Router,
    private shared_Data_service: SharedItemsDataService) {

  }

  ngOnInit(): void { 
    if( !!history.state.data.item.id) {
      this.checkIfItemExists();
    }
  }

  checkIfItemExists () : any {
    return this.item= {
      titleName:history.state.data.item.titleName,
      content:history.state.data.item.content,
      id:history.state.data.id
     }
  }

  onSaveUpdateButtonClick(itemTitle: string, content : string, id:string): any {
    if (itemTitle !=='' && content !== '' && !id ) {
      this.router.navigateByUrl("/homePage", { skipLocationChange: false })
      return this.shared_Data_service.addNewItem(itemTitle, content);
    } 
    else if(itemTitle !=='' && content !== '' && id){
      this.router.navigateByUrl("/homePage", { skipLocationChange: false })
      return this.shared_Data_service.updateItem(itemTitle, content,id);
    }
    
    else {
      return this.errorText = 'Input field cannot be empty.';
    }
  }
}

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
  item: Item ;
  errorText = '';

  constructor(
    private _router: Router,
    private shared_Data_service: SharedItemsDataService) {
      this.item= {
        titleName:'',
        content:'',
        id:''
      }

  }

  ngOnInit(): void { 
      this.checkIfItemExists();
  }

  checkIfItemExists () : any {
    if(history.state.data.item.id === undefined) {
      return this.item= {
        titleName:'',
        content:'',
        id:''
       }

    } 
    return this.item= {
      titleName:history.state.data.item.titleName,
      content:history.state.data.item.content,
      id:history.state.data.id
     }
  }

  onSaveUpdateButtonClick(itemTitle: string, content : string, id:string): any {
    if (itemTitle !== '' && content !== '' && !id) {
      const titleMatch = this.shared_Data_service.getAllItems().filter(el => el.title === itemTitle).length;
      const contentMatch = this.shared_Data_service.getAllItems().filter(el => el.content === content).length;

      if (titleMatch === 0 || contentMatch === 0) {
        this._router.navigateByUrl("/homePage", { skipLocationChange: false })
        return this.shared_Data_service.addNewItem(itemTitle, content);
      } else {
        return this.errorText = 'Item with same titel or content already exsists.';
      }

    }
    else if (itemTitle !== '' && content !== '' && id) {
      const titleMatch = this.shared_Data_service.getAllItems().filter(el => el.title === itemTitle).length;
      const contentMatch = this.shared_Data_service.getAllItems().filter(el => el.content === content).length;

      if (titleMatch === 0 || contentMatch === 0) {
        this._router.navigateByUrl("/homePage", { skipLocationChange: false })
        return this.shared_Data_service.updateItem(itemTitle, content, id);
      } else {
        return this.errorText = 'Item with same titel or content already exsists.';
      }
    }
    else {
      return this.errorText = 'Input field cannot be empty.';
    }
  }

  public returnToHomePage (): void {
    this._router.navigateByUrl("/homePage", { skipLocationChange: false });
    }
}

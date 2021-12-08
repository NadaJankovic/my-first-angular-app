
import { Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})

export class ItemDetailsComponent implements OnInit, OnChanges {
 item : any;

  constructor( private _router : Router) { 
  
  }
  ngOnChanges (changes: SimpleChanges) {
    console.log('details on change', changes)
  
  }
 
  ngOnInit(): void {
    this.item  ={
        titleName: window.history.state.item.title,
        content:  window.history.state.item.content,
        id: window.history.state.item.id
      };
  
    console.log('details,on intit item', this.item )
  }

 public returnToHomePage (): void {
  this._router.navigateByUrl("/homePage", { skipLocationChange: false });
  }

}

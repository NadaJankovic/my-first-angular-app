import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalRoutingModule} from './internal-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { AddNewItemComponent } from './add-new-item/add-new-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { SharedItemsDataService } from 'src/app/services/local-storage-service/shared-items-data.service';
import { InternalComponentComponent } from './internal-container/internal-component/internal-component.component';


@NgModule({
  declarations: [
    HomePageComponent,
    AddNewItemComponent,
    NavBarComponent,
    ItemDetailsComponent,
    InternalComponentComponent
  ],
  imports: [
    CommonModule,
    InternalRoutingModule,
    StorageServiceModule,
    ReactiveFormsModule,
    FormsModule,
    LabelModule,
    InputsModule,
    ButtonsModule,
    
  ],
  providers:[SharedItemsDataService ],
})
export class InternalModule { }

import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedItemsDataService } from 'src/app/services/local-storage-service/shared-items-data.service'; 

@Component({
  selector: 'add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.scss']
})

export class AddNewItemComponent implements OnInit,OnDestroy {
 public registerForm!: FormGroup;
 public routeSub!: Subscription;
 public paramId!: string; 

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private route: ActivatedRoute,
    private shared_Data_service: SharedItemsDataService) {
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  ngOnInit() {
   this.routeSub= this.route.params.subscribe(params => {
    this.paramId =params.itemId;
    });
    this.registerForm = this._fb.group({
        title: new FormControl('', [
          Validators.required,
          Validators.minLength(2)],
          ),
        content: new FormControl('', [
          Validators.required,
          Validators.minLength(5)]),
        id: new FormControl('')
      })
    if (!!this.paramId) {
      this.prePopulateForm(this.paramId);
    }
  }

  public submitForm(): void {
    this.registerForm.markAllAsTouched();
    if(this.registerForm.valid) {
    this.returnToHomePage();
    if (!!this.registerForm.value.id) {
      return this.shared_Data_service.editItem(this.registerForm.value.title, this.registerForm.value.content, this.registerForm.value.id);
    }
    return this.shared_Data_service.addNewItem(this.registerForm.value.title, this.registerForm.value.content);
  }
  }
  
  public prePopulateForm(id: string): void {
   this.registerForm.markAllAsTouched();
    const filteredItemById = this.shared_Data_service.getItemById(id);

    this.registerForm.patchValue({
      title: filteredItemById[0].title,
      content: filteredItemById[0].content,
      id: filteredItemById[0].id
    });
  }

  public clearForm(): void {
    this.registerForm.reset();
  }

  public returnToHomePage(): void {
    this._router.navigateByUrl("/protected/homePage",{ skipLocationChange: false });
  }
 
}

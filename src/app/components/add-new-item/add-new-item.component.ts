import { Component, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SharedItemsDataService } from 'src/app/local-storage-service/shared-items-data.service';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.scss']
})

export class AddNewItemComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private shared_Data_service: SharedItemsDataService) {
    this.registerForm = this._fb.group({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(2)]),
      content: new FormControl('', [
        Validators.required,
        Validators.minLength(13)]),
      id: new FormControl('')
    })

  }

  ngOnInit() {
    if (!!history.state.id) {
      this.prePopulateForm(history.state.id);
    }
  }

  public submitForm(): void {
    this.returnToHomePage();
    if (!!this.registerForm.value.id) {
      return this.shared_Data_service.editItem(this.registerForm.value.title, this.registerForm.value.content, this.registerForm.value.id);
    }
    return this.shared_Data_service.addNewItem(this.registerForm.value.title, this.registerForm.value.content);
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
    this._router.navigateByUrl("/homePage", { skipLocationChange: false });
  }
}

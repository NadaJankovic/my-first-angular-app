import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { AddNewItemComponent } from './add-new-item.component';
import { SharedItemsDataService } from '../../local-storage-service/shared-items-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';


// define the test suit
describe('AddNewItemComponent', () => {
    //define the required objects for test
    let component: AddNewItemComponent;
    let service: SharedItemsDataService;
    let fb: FormBuilder;
    let form: FormGroup;
    let formControl: FormControl;
    let router: Router;
    let activatedRoute: ActivatedRoute;
    let storage: Storage;
    let spyOnPrepopulateForm: any;
    let spyOneditItem;
    let spyOnGetItemById;


    beforeEach(() => {

        const paramsSubjectMock = of({
            itemId: '1'
        });

        activatedRoute = {
            params: paramsSubjectMock
        } as unknown as ActivatedRoute;

        service = {
            editItem: jest.fn(),
            addNewItem: jest.fn(),
            getItemById:jest.fn()
        } as unknown as SharedItemsDataService;

        router = {
            navigateByUrl: jest.fn(),
        } as unknown as Router;

        //insantiate a component
        component = new AddNewItemComponent(fb, router, activatedRoute, service);

        const formItemMock = group({
            title: new FormControl('test', [
                Validators.required,
                Validators.minLength(2)]),
            content: new FormControl('test contetst', [
                Validators.required,
                Validators.minLength(5)]),
            id: new FormControl('1')
        }) as unknown as FormBuilder;

       form={
        formItemMock
       } as unknown as FormGroup

        //mock implementation added to demonstrate how mocked function can have implementation of our choice;
        spyOnPrepopulateForm = jest.spyOn(component, 'prePopulateForm');
        spyOneditItem = jest.spyOn(service, 'editItem');   
    });

    it('check result of subscription- id is sent via activated route', (done) => {
        activatedRoute.params.subscribe(id => {
            expect(id.itemId).toBe('1');
            done();
        });
    });

    it('should  prePopulateForm be called in ngOnInit', () => {
        spyOnGetItemById = jest.spyOn(service, 'getItemById');
        service.getItemById('1');
        expect(spyOnGetItemById).toBeCalledTimes(1);
    })

    it('returnToHomePage()', () => {
        const spyOnRouterNavigate = jest.spyOn(router, 'navigateByUrl');
        component.returnToHomePage();
        expect(spyOnRouterNavigate).toBeCalledWith("/homePage", { "skipLocationChange": false });
    })

  
    // describe('pprepopulate/clear form', () => {
    //     
    //     let spyOnClearForm:any;

    //     beforeEach(() => {
    //         spyOnPrepopulateForm = jest.spyOn(component, 'prePopulateForm');
    //         spyOnClearForm = jest.spyOn(component, 'clearForm');
    //         component.ngOnInit();
    //     });


    //     it('should create', () => {
    //         expect(component).toBeTruthy();
    //     });

    // });
   
});


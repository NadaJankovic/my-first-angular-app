import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AddNewItemComponent } from './add-new-item.component';
import { SharedItemsDataService } from '../../local-storage-service/shared-items-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';
import { hasUncaughtExceptionCaptureCallback } from 'process';
import { group } from 'console';

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


    beforeEach(() => {
        const paramsSubjectMock = of({
            itemId: '1'
        });
        const formItemMock = {
                title:'',
                content: '',
                id: ''
        };

        activatedRoute = {
            params: paramsSubjectMock
        } as unknown as ActivatedRoute;

        service = {
            editItem: jest.fn(),
            addNewItem: jest.fn()
        } as unknown as SharedItemsDataService;

        router = {
            navigateByUrl: jest.fn(),
        } as unknown as Router;
        //insantiate a component
        component = new AddNewItemComponent(fb, router, activatedRoute, service);

        fb = {
            group:jest.fn().mockImplementation(()=> formItemMock),
        } as unknown as FormBuilder;

        form = fb as unknown as FormGroup;
        //mock implementation added to demonstrate how mocked function can have implementation of our choice;
        spyOnPrepopulateForm = jest.spyOn(component, 'prePopulateForm').mockImplementation(()=> 'prePopulateForm() called');
        spyOneditItem = jest.spyOn(service,'editItem');
    });

    it('check result of subscription- id is sent via activated route', (done) => {
        activatedRoute.params.subscribe(id => {
            expect(id.itemId).toBe('1');
            done();
        });
    });

    it('should  prePopulateForm be called in ngOnInit', () => {
         component.ngOnInit();
         expect(component.paramId).toEqual('1');
        expect(spyOnPrepopulateForm).toBeCalledWith('1');
        expect(component.registerForm).toBeDefined();
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

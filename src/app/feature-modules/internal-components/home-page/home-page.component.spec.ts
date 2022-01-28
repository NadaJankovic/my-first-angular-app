import { HomePageComponent } from './home-page.component';
import { SharedItemsDataService } from 'src/app/services/local-storage-service/shared-items-data.service';
import { ActivatedRoute, Router } from '@angular/router';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let router: Router;
  let activatedRoute: ActivatedRoute;
  let service: SharedItemsDataService;

  const allItemsMock = [{title: "trew", content: "rewrewrew", id: "0.3030743813325203"}, {title: "11", content: "121`2`132", id: "0.9684771209931413"},
   {title: "43242", content: "4324234", id: "0.08386521558806193"},
   {title: "2212121", content: "212121212", id: "0.8288416654447852"},
   {title: "5555", content: "888888", id: "0.9485397675115121"}];


  beforeEach(() => {
    service = {
      getAllItems: jest.fn(),
      delete: jest.fn()
    } as unknown as SharedItemsDataService;
    router = {
      navigateByUrl: jest.fn(),
    } as unknown as Router;
    activatedRoute = {} as ActivatedRoute;
    component = new HomePageComponent(activatedRoute, router, service);
    component.ngOnInit();
   
  });                                                                                                  

  it('should check if component is instantiated', () => {
    expect(component).toBeTruthy();
  });

  it('should get all items from storage be called on init', () => {
    const spyOnGetAllItems = jest.spyOn(service, 'getAllItems').mockImplementation(()=> allItemsMock);// mocked implementation of service method getAllItems
     expect(spyOnGetAllItems).toBeCalled();                                                            // to return mocked value
     expect(service.getAllItems()).toBe(allItemsMock);
  });

  it('sholud check deleteItem method', () => {
    const id = '1';
    const spyOnDelete = jest.spyOn(service, 'delete');
    const spyOnGetAllItems = jest.spyOn(service, 'getAllItems');
    component.deleteItem(id);
    expect(spyOnDelete).toBeCalled();
    expect(spyOnGetAllItems).toBeCalled();

  }),

    it('sholud ckeck editItem', () => {
      const id = '1';
      const spyOnRouterNavigate = jest.spyOn(router, 'navigateByUrl');
      component.editItem(id);
      expect(spyOnRouterNavigate).toHaveBeenCalled();
    })
});

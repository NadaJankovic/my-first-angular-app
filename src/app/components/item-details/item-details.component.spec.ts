import { ItemDetailsComponent } from './item-details.component';
import { ActivatedRoute, Router } from '@angular/router';
let component: ItemDetailsComponent;
let router: Router;
describe('ItemDetailsComponent', () => {
  router = {
    navigateByUrl: jest.fn()
  } as unknown as Router;
 component = new ItemDetailsComponent(router);

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test returnToHomePage', ()=> {
    const spyOnRouterNavigate = jest.spyOn(router, 'navigateByUrl');
    component.returnToHomePage();
    expect(spyOnRouterNavigate);
    component.returnToHomePage();
    expect(spyOnRouterNavigate).toBeCalledWith("/homePage", { "skipLocationChange": false });
  });
});

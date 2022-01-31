import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalComponentComponent } from './internal-component.component';

describe('InternalComponentComponent', () => {
  let component: InternalComponentComponent;
  let fixture: ComponentFixture<InternalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

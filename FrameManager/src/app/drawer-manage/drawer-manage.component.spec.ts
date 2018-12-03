import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerManageComponent } from './drawer-manage.component';

describe('DrawerManageComponent', () => {
  let component: DrawerManageComponent;
  let fixture: ComponentFixture<DrawerManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

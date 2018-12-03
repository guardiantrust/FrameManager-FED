import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelManageComponent } from './panel-manage.component';

describe('PanelManageComponent', () => {
  let component: PanelManageComponent;
  let fixture: ComponentFixture<PanelManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeManageComponent } from './edge-manage.component';

describe('EdgeManageComponent', () => {
  let component: EdgeManageComponent;
  let fixture: ComponentFixture<EdgeManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdgeManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgeManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

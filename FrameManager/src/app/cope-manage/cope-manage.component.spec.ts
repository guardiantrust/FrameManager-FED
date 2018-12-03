import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopeManageComponent } from './cope-manage.component';

describe('CopeManageComponent', () => {
  let component: CopeManageComponent;
  let fixture: ComponentFixture<CopeManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopeManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopeManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

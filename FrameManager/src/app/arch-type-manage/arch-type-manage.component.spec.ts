import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchTypeManageComponent } from './arch-type-manage.component';

describe('ArchTypeManageComponent', () => {
  let component: ArchTypeManageComponent;
  let fixture: ComponentFixture<ArchTypeManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchTypeManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchTypeManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

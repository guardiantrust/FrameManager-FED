import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchSizeManageComponent } from './arch-size-manage.component';

describe('ArchSizeManageComponent', () => {
  let component: ArchSizeManageComponent;
  let fixture: ComponentFixture<ArchSizeManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchSizeManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchSizeManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

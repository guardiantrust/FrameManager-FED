import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameCreateComponent } from './frame-create.component';

describe('FrameCreateComponent', () => {
  let component: FrameCreateComponent;
  let fixture: ComponentFixture<FrameCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

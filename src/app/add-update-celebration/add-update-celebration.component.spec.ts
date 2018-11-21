import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateCelebrationComponent } from './add-update-celebration.component';

describe('AddUpdateCelebrationComponent', () => {
  let component: AddUpdateCelebrationComponent;
  let fixture: ComponentFixture<AddUpdateCelebrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateCelebrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateCelebrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

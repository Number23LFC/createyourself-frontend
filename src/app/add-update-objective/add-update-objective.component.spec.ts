import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateObjectiveComponent } from './add-update-objective.component';

describe('AddUpdateObjectiveComponent', () => {
  let component: AddUpdateObjectiveComponent;
  let fixture: ComponentFixture<AddUpdateObjectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateObjectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

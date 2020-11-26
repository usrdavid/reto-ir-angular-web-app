import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOutComponent } from './form-out.component';

describe('FormOutComponent', () => {
  let component: FormOutComponent;
  let fixture: ComponentFixture<FormOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

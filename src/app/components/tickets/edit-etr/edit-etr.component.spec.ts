import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditETRComponent } from './edit-etr.component';

describe('EditETRComponent', () => {
  let component: EditETRComponent;
  let fixture: ComponentFixture<EditETRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditETRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditETRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

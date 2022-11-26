import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditGuestSidenavComponent } from './add-edit-guest-sidenav.component';

describe('AddEditGuestSidenavComponent', () => {
  let component: AddEditGuestSidenavComponent;
  let fixture: ComponentFixture<AddEditGuestSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditGuestSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditGuestSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

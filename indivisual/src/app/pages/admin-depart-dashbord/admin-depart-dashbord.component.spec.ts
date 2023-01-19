import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDepartDashbordComponent } from './admin-depart-dashbord.component';

describe('AdminDepartDashbordComponent', () => {
  let component: AdminDepartDashbordComponent;
  let fixture: ComponentFixture<AdminDepartDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDepartDashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDepartDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

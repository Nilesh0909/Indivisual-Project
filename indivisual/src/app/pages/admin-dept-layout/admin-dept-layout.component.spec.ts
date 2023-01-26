import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeptLayoutComponent } from './admin-dept-layout.component';

describe('AdminDeptLayoutComponent', () => {
  let component: AdminDeptLayoutComponent;
  let fixture: ComponentFixture<AdminDeptLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeptLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDeptLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

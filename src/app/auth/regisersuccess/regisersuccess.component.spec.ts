import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisersuccessComponent } from './regisersuccess.component';

describe('RegisersuccessComponent', () => {
  let component: RegisersuccessComponent;
  let fixture: ComponentFixture<RegisersuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisersuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisersuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

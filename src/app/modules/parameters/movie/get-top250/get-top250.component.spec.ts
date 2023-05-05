import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTop250Component } from './get-top250.component';

describe('GetTop250Component', () => {
  let component: GetTop250Component;
  let fixture: ComponentFixture<GetTop250Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetTop250Component]
    });
    fixture = TestBed.createComponent(GetTop250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KejestoComponent } from './kejesto.component';

describe('KejestoComponent', () => {
  let component: KejestoComponent;
  let fixture: ComponentFixture<KejestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KejestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KejestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

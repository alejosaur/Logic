import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiarComponent } from './estudiar.component';

describe('EstudiarComponent', () => {
  let component: EstudiarComponent;
  let fixture: ComponentFixture<EstudiarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudiarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosLindasComponent } from './fotos-lindas.component';

describe('FotosLindasComponent', () => {
  let component: FotosLindasComponent;
  let fixture: ComponentFixture<FotosLindasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotosLindasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotosLindasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

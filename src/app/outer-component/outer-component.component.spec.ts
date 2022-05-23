import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterComponentComponent } from './outer-component.component';

describe('OuterComponentComponent', () => {
  let component: OuterComponentComponent;
  let fixture: ComponentFixture<OuterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuterComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OuterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

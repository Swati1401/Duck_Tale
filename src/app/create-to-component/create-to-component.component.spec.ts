import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateToComponentComponent } from './create-to-component.component';

describe('CreateToComponentComponent', () => {
  let component: CreateToComponentComponent;
  let fixture: ComponentFixture<CreateToComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateToComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateToComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

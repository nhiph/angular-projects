import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveClassComponent } from './directive-class.component';

describe('DirectiveClassComponent', () => {
  let component: DirectiveClassComponent;
  let fixture: ComponentFixture<DirectiveClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelOneComponent } from './model-one.component';

describe('ModelOneComponent', () => {
  let component: ModelOneComponent;
  let fixture: ComponentFixture<ModelOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationSeperateComponent } from './integration-seperate.component';

describe('IntegrationSeperateComponent', () => {
  let component: IntegrationSeperateComponent;
  let fixture: ComponentFixture<IntegrationSeperateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrationSeperateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrationSeperateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

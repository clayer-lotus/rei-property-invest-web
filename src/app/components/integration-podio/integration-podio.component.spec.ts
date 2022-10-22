import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationPodioComponent } from './integration-podio.component';

describe('IntegrationPodioComponent', () => {
  let component: IntegrationPodioComponent;
  let fixture: ComponentFixture<IntegrationPodioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrationPodioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrationPodioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

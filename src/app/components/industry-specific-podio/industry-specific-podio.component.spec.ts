import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrySpecificPodioComponent } from './industry-specific-podio.component';

describe('IndustrySpecificPodioComponent', () => {
  let component: IndustrySpecificPodioComponent;
  let fixture: ComponentFixture<IndustrySpecificPodioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustrySpecificPodioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustrySpecificPodioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingIntroComponent } from './heading-intro.component';

describe('HeadingIntroComponent', () => {
  let component: HeadingIntroComponent;
  let fixture: ComponentFixture<HeadingIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadingIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadingIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

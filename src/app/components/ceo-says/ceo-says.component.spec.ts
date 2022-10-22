import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeoSaysComponent } from './ceo-says.component';

describe('CeoSaysComponent', () => {
  let component: CeoSaysComponent;
  let fixture: ComponentFixture<CeoSaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeoSaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeoSaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

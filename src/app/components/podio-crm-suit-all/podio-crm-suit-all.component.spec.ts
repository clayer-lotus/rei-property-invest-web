import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodioCrmSuitAllComponent } from './podio-crm-suit-all.component';

describe('PodioCrmSuitAllComponent', () => {
  let component: PodioCrmSuitAllComponent;
  let fixture: ComponentFixture<PodioCrmSuitAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodioCrmSuitAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodioCrmSuitAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

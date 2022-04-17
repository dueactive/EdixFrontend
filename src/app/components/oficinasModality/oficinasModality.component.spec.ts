import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinasModalityComponent } from './oficinasModality.component';

describe('OficinasfiltroComponent', () => {
  let component: OficinasModalityComponent;
  let fixture: ComponentFixture<OficinasModalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OficinasModalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OficinasModalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

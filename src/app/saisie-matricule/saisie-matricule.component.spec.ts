import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieMatriculeComponent } from './saisie-matricule.component';

describe('SaisieMatriculeComponent', () => {
  let component: SaisieMatriculeComponent;
  let fixture: ComponentFixture<SaisieMatriculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaisieMatriculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieMatriculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

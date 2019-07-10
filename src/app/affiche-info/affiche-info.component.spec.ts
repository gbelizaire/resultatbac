import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheInfoComponent } from './affiche-info.component';

describe('AfficheInfoComponent', () => {
  let component: AfficheInfoComponent;
  let fixture: ComponentFixture<AfficheInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

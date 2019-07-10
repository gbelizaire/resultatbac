import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheNoteComponent } from './affiche-note.component';

describe('AfficheNoteComponent', () => {
  let component: AfficheNoteComponent;
  let fixture: ComponentFixture<AfficheNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

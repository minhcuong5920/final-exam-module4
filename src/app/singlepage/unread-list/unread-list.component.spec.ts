import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnreadListComponent } from './unread-list.component';

describe('UnreadListComponent', () => {
  let component: UnreadListComponent;
  let fixture: ComponentFixture<UnreadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnreadListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnreadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

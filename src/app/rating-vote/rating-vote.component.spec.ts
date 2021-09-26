import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingVoteComponent } from './rating-vote.component';

describe('RatingVoteComponent', () => {
  let component: RatingVoteComponent;
  let fixture: ComponentFixture<RatingVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingVoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

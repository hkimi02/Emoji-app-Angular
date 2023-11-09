import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiCardComponent } from './emoji-card.component';

describe('EmojiCardComponent', () => {
  let component: EmojiCardComponent;
  let fixture: ComponentFixture<EmojiCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmojiCardComponent]
    });
    fixture = TestBed.createComponent(EmojiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

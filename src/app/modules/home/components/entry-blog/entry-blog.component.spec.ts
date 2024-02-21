import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryBlogComponent } from './entry-blog.component';

describe('EntryBlogComponent', () => {
  let component: EntryBlogComponent;
  let fixture: ComponentFixture<EntryBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntryBlogComponent]
    });
    fixture = TestBed.createComponent(EntryBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

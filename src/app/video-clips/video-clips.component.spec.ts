import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoClipsComponent } from './video-clips.component';

describe('VideoClipsComponent', () => {
  let component: VideoClipsComponent;
  let fixture: ComponentFixture<VideoClipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoClipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoClipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

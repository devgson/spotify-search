import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackAlbumComponent } from './track-album.component';

describe('TrackAlbumComponent', () => {
  let component: TrackAlbumComponent;
  let fixture: ComponentFixture<TrackAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

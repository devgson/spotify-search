import { Component, OnInit } from '@angular/core';
import { TrackService } from 'src/app/shared/service/track.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Track } from 'src/app/shared/model/track.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-track-view',
  templateUrl: './track-view.component.html',
  styleUrls: ['./track-view.component.css']
})
export class TrackViewComponent implements OnInit {

  track: Track;

  constructor(
    private trackService: TrackService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const trackId = param.get('id');
      this.trackService.getTrack(trackId)
        .subscribe((track: any) => {
          console.log(track);
          this.track = {
            id: track.id,
            name: track.name,
            popularity: track.popularity,
            audio: track.preview_url,
            album: track.album,
            artists: track.artists
          };
        });
    });
  }

  goBack() {
    this.location.back();
  }

}

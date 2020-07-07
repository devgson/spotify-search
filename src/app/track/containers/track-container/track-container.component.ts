import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrackService } from 'src/app/shared/service/track.service';
import { Track } from 'src/app/shared/model/track.interface';
import { convertMS } from 'src/app/shared/utils/utils';

@Component({
  selector: 'app-track-container',
  templateUrl: './track-container.component.html',
  styleUrls: ['./track-container.component.css']
})
export class TrackContainerComponent implements OnInit {
  tracks: Track[];
  queryString: string;

  constructor(private trackService: TrackService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(param => {
      this.queryString = param.get('query');
      if (this.queryString) {
        this.trackService.search({ q: this.queryString, type: 'track'})
        .subscribe(({ tracks }: any) => {
          this.tracks = tracks.items.map(track => {
            return {
              id: track.id,
              name: track.name,
              type: track.type,
              popularity: track.popularity,
              duration: convertMS(track.duration_ms),
              audio: track.preview_url,
              explicit: track.explicit,
              album: track.album,
              artists: track.artists
            };
          });
        });
      }
    });
  }

  handleSearch(value) {
    this.router.navigate(['/search'], { queryParams: { query: value }});
  }

}

import { Component, OnInit } from '@angular/core';
import { TrackService } from 'src/app/shared/service/track.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/shared/model/track.interface';
import { Location } from '@angular/common';
import { convertMS } from 'src/app/shared/utils/utils';

@Component({
  selector: 'app-track-album',
  templateUrl: './track-album.component.html',
  styleUrls: ['./track-album.component.css']
})
export class TrackAlbumComponent implements OnInit {
  album: Album;

  constructor(
    private trackService: TrackService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const albumId = param.get('id');
      if (albumId) {
        this.trackService.getAlbum(albumId)
          .subscribe((album: any) => {
            this.album = {
              id: album.id,
              name: album.name,
              releaseDate: new Date(album.release_date),
              url: album.external_urls.spotify,
              genres: album.genres,
              popularity: album.popularity,
              tracks: album.tracks.items,
              artists: album.artists,
              images: album.images,
              label: album.label
            };
          });
      }
    });
  }

  convertMS(ms) {
    return convertMS(ms);
  }

  totalListeningTime(tracks) {
    if (!tracks) { return; }
    return tracks.map(track => convertMS(track.duration_ms).minute)
    .reduce((prev, curr) => prev + curr);
  }

  goBack() {
    this.location.back();
  }

}

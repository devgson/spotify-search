import { Component, OnInit, Input } from '@angular/core';
import { Track } from 'src/app/shared/model/track.interface';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {

  @Input() query: string;
  @Input() tracks: Track[];

  constructor() { }

  ngOnInit() {
  }

}

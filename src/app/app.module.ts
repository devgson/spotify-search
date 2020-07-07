import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TrackContainerComponent } from './track/containers/track-container/track-container.component';
import { TrackAlbumComponent } from './track/containers/track-album/track-album.component';
import { TrackViewComponent } from './track/containers/track-view/track-view.component';
import { TrackListComponent } from './track/components/track-list/track-list.component';
import { TrackInputComponent } from './track/components/track-input/track-input.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'search' },
  { path: 'search', component: TrackContainerComponent },
  { path: 'album/:id', component: TrackAlbumComponent },
  { path: 'track/:id', component: TrackViewComponent },
  { path: '**', redirectTo: 'search' }
];

@NgModule({
  declarations: [
    AppComponent,
    TrackContainerComponent,
    TrackAlbumComponent,
    TrackViewComponent,
    TrackListComponent,
    TrackInputComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

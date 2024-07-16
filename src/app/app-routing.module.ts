import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeDetailComponent } from './pages/episode-detail/episode-detail.component';
import { PodcastDetailComponent } from './pages/podcast-detail/podcast-detail.component';
import { PodcastListComponent } from './pages/podcast-list/podcast-list.component';

const routes: Routes = [
  { path: '', component: PodcastListComponent },
  { path: 'podcast/:podcastId', component: PodcastDetailComponent },
  {
    path: 'podcast/:podcastId/episode/:episodeId',
    component: EpisodeDetailComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

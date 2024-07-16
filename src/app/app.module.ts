import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PodcastListComponent } from './pages/podcast-list/podcast-list.component';
import { PodcastDetailComponent } from './pages/podcast-detail/podcast-detail.component';
import { EpisodeDetailComponent } from './pages/episode-detail/episode-detail.component';
import { DurationPipePipe } from './pipes/duration-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PodcastListComponent,
    PodcastDetailComponent,
    EpisodeDetailComponent,
    DurationPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

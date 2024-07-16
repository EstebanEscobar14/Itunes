import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PodcastListComponent } from './pages/podcast-list/podcast-list.component';
import { PodcastDetailComponent } from './pages/podcast-detail/podcast-detail.component';
import { EpisodeDetailComponent } from './pages/episode-detail/episode-detail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { DurationPipe } from './pipes/duration-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PodcastListComponent,
    PodcastDetailComponent,
    EpisodeDetailComponent,
    HeaderComponent,
    DurationPipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

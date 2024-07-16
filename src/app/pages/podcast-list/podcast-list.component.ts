import { Component, OnInit } from '@angular/core';
import { Entry } from 'src/app/interfaces/podcats.interface';
import { PodcastService } from 'src/app/services/podcast.service';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.css'],
})
export class PodcastListComponent implements OnInit {
  podcasts: Entry[] = [];
  filteredPodcasts: Entry[] = [];
  searchText: string = '';
  loading: boolean = true;

  constructor(private podcastService: PodcastService) {}

  ngOnInit(): void {
    this.podcastService.getTopPodcasts().subscribe((data) => {
      this.podcasts = data.feed.entry;
      this.filteredPodcasts = [...this.podcasts];
      this.loading = false;
    });
  }

  filterPodcasts() {
    this.filteredPodcasts = this.podcasts.filter(
      (podcast) =>
        podcast.title.label.toLowerCase().includes(this.searchText.toLowerCase()) ||
        podcast['im:artist'].label.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}

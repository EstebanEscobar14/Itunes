import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from 'src/app/interfaces/podcasts-detail.interface';
import { Entry } from 'src/app/interfaces/podcats.interface';
import { PodcastService } from 'src/app/services/podcast.service';

@Component({
  selector: 'app-podcast-detail',
  templateUrl: './podcast-detail.component.html',
  styleUrls: ['./podcast-detail.component.css'],
})
export class PodcastDetailComponent implements OnInit {
  podcast: Result | undefined;
  episodes: Result[] = [];
  podcastDetail?: Entry;
  loadingEpisodes: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private podcastService: PodcastService
  ) {}

  ngOnInit(): void {
    this.getPodcastDetail();
  }

  getPodcastDetail(): void {
    const podcastId = this.route.snapshot.paramMap.get('podcastId');
    if (podcastId) {
      // Obtener detalles del podcast
      this.podcastService.getPodcatsById(podcastId).subscribe((data) => {
        this.podcastDetail = data;
      });

      // Obtener episodios del podcast
      this.podcastService.getPodcastEpisodes(podcastId).subscribe((data) => {
        this.podcast = data.results[0];
        this.episodes = data.results.slice(1);
        this.loadingEpisodes = false;
      });
    }
  }
}

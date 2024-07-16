import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from 'src/app/interfaces/podcasts-detail.interface';
import { PodcastService } from 'src/app/services/podcast.service';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.css'],
})
export class EpisodeDetailComponent implements OnInit {
  podcast: Result | undefined;
  episode: Result | undefined;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private podcastService: PodcastService
  ) {}

  ngOnInit(): void {
    this.getEpisodeDetail();
  }

  getEpisodeDetail(): void {
    const podcastId = this.route.snapshot.paramMap.get('podcastId');
    const episodeId = this.route.snapshot.paramMap.get('episodeId');

    if (podcastId && episodeId) {
      this.podcastService.getPodcastEpisodes(podcastId).subscribe((data) => {
        // Llamada al servicio para obtener los episodios del podcast
        this.podcast = data.results[0]; // Asignación del detalle del podcast obtenido
        this.episode = data.results.find(
          (ep: { trackId: number }) => ep.trackId === parseInt(episodeId, 10)
        ); // Búsqueda y asignación del detalle del episodio específico
        this.loading = false; // Indicación de que la carga ha finalizado
      });
    }
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { SearchResponsePodcastDetail } from '../interfaces/podcasts-detail.interface';
import { SearchResponsePodcast, Entry } from '../interfaces/podcats.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PodcastService {
  private readonly topPodcastsUrl = environment.topPodcastsUrl;
  private readonly allOriginsBaseUrl = environment.allOriginsBaseUrl;

  constructor(private http: HttpClient) {}

  getTopPodcasts(): Observable<SearchResponsePodcast> {
    return this.handleError<SearchResponsePodcast>(this.topPodcastsUrl); // Obtener los podcasts más populares gestionando errores
  }

  getPodcastEpisodes(podcastId: string): Observable<SearchResponsePodcastDetail> {
    const url = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`; // URL para obtener los episodios de un podcast específico
    return this.handleError<SearchResponsePodcastDetail>(url); // Obtener los episodios de un podcast gestionando errores
  }

  getPodcatsById(id: string): Observable<Entry | undefined> {
    return this.http.get<SearchResponsePodcast>(this.topPodcastsUrl).pipe( // Obtener un podcast por ID
      map(response => response.feed.entry.find(podcast => podcast.id.attributes['im:id'] === id)) // Mapeo de la respuesta para encontrar el podcast por ID
    );
  }

  private handleError<T>(url: string): Observable<T> {
    return this.http.get<{ contents: string }>(`${this.allOriginsBaseUrl}${encodeURIComponent(url)}`).pipe( // Manejar errores de las peticiones HTTP
      map(response => JSON.parse(response.contents) as T), // Transformación de la respuesta JSON a tipo T
      catchError(error => {
        console.error('Error:', error); // Registro del error en la consola
        return throwError(error); // Lanzamiento del error para que sea manejado por el suscriptor
      })
    );
  }
}

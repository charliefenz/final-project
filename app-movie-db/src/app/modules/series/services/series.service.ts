import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndPoints } from 'src/app/common/endpoints';
import { GlobalConstants } from 'src/app/common/global-constants';
import { ArraySeriesResponse } from '../models/array-series-response';
import { SerieDetail } from '../models/serie-detail';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private httpClient: HttpClient) { }

  getPopularSeries(): Observable<ArraySeriesResponse> {
    return this.httpClient.get<ArraySeriesResponse>(`${EndPoints.popularSeries}`);
  }

  getSerie(id: string): Observable<SerieDetail> {
    return this.httpClient.get<SerieDetail>(`${EndPoints.serie}${id}${GlobalConstants.apiKey}${GlobalConstants.langEs}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import 'rxjs/add/observable/of';

@Injectable()
export class StatsService {

  private nba_stats_url = 'https://stats.nba.com/stats';

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${this.nba_stats_url}/leaguedashplayerbiostats/?PerMode=Totals&LeagueID=00&Season=2016-17&SeasonType=Regular Season`)
      .pipe(
        map((result: any) => result.resultSets),
        catchError(this.handleError<any[]>('getPlayers', []))
      );
  }

  getPlayer(id: string) { 
    return this.http.get<any>(`${this.nba_stats_url}/commonplayerinfo/?PlayerID=${id}`)
      .pipe(
        map((result: any) => result.resultSets),
        catchError(this.handleError<any[]>('getPlayer', []))
      );
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.log(`${operation} status code: ${error.status} failed: ${error.message}`);
      return Observable.of(result as T);
    };
  }

}

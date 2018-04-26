import { Component, OnInit } from '@angular/core';
import { StatsService } from '../stats.service';
import { Observable } from 'rxjs/Observable';
import { StatsFiltersService } from '../stats-filters.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  items: Array<any>;
  filterargs = {  
    propNames: ['PLAYER_NAME', 'AGE', 'TEAM_ID'],
    indexes: [0,0,0]
  };

  constructor(
    private statsService: StatsService,
    private statsFiltersService: StatsFiltersService  
  ) { }

  ngOnInit() {
    this.getPlayers();
  }

  private getPlayers(): void {
    this.statsService.getPlayers().subscribe((items: Array<any>) => {
      this.items = items;
      this.filterargs.indexes = [...this.statsFiltersService
        .getPropsIndexes(this.items, this.filterargs)];
    });
  }

}

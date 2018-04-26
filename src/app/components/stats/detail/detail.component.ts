import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatsService } from '../stats.service';
import { StatsFiltersService } from '../stats-filters.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  player: any;
  filterargs: object;

  constructor(
    private activatedRoute: ActivatedRoute,
    private statsService: StatsService,
    private statsFiltersService: StatsFiltersService
  ) { }

  ngOnInit() {
    this.getPlayer(this.activatedRoute.snapshot.params['PLAYER_ID']);
  }
  
  getPlayer(id: string): void {
    this.statsService.getPlayer(id).subscribe((player) => {
      this.player = player;
      this.getFilteredPlayer(player);
    });
  }
  getFilteredPlayer(player: any): void { 
    this.filterargs = Object.assign({}, this.statsFiltersService.getFilteredPlayer(player));
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
import { PlayersListComponent } from './players-list/players-list.component';
import { DetailComponent } from './detail/detail.component';
import { StatsService } from './stats.service';
import { StatsFiltersService } from './stats-filters.service';
import { StatsFilterPipe } from './stats-filter.pipe';
import { StatsFilterByIndexPipe } from './stats-filter-by-index.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    PlayersListComponent,
    DetailComponent,
    StatsFilterPipe,
    StatsFilterByIndexPipe,
  ],
  providers: [
    StatsService,
    StatsFiltersService
  ]
})
export class StatsModule { }

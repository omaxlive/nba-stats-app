import { Injectable } from '@angular/core';

@Injectable()
export class StatsFiltersService {

  detailFilterArgs = {
    propNames: ['FIRST_NAME', 'LAST_NAME', 'BIRTHDATE'],
    data: [],
    indexes: [0, 0, 0],
  };

  constructor() { }

  getPropsIndexes(items: Array<any>, filterargs: any): any { 
    let indexes = [];
    for (let i = 0; i < filterargs.indexes.length; i++) {
      indexes.push(items[0].headers
        .findIndex(item => item == filterargs.propNames[i]));
    }
    return indexes;
  }

  getFilteredPlayer(player: any): any {
    this.detailFilterArgs.indexes= [...this.getPropsIndexes(player, this.detailFilterArgs)];
    this.detailFilterArgs.data = [...this.getPropsData(player, this.detailFilterArgs)];
    return this.detailFilterArgs;
  }

  private getPropsData(player: Array<any>, filterargs: any): any { 
    let data = [];
    data = player[0].rowSet[0]
      .filter((element, index) => filterargs.indexes.includes(index));
    return data; 
  }

}

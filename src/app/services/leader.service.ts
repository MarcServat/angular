import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders() :Leader[] {
    return LEADERS;
  }

  // getLeader(id: Number): Leader {
  //   const a = LEADERS.filter((leader) => leader.id === id);
  //   return a[0].name
  // }

}

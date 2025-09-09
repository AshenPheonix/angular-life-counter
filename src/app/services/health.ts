import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Health {

  players =new Map([
    ['p1',40],
    ['p1',40],
    ['p2',40],
    ['p3',40],
    ['p4', 40]
  ])


  damage(who:string, count: number){
    this.players.set(who,
      <number>this.players.get(who) + count
    )
  }

  reset(){
    this.players.set('p1', 40);
    this.players.set('p2', 40)
    this.players.set('p3', 40)
    this.players.set('p4', 40)
  }
}

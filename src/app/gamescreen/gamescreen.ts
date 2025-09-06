import { Component, input } from '@angular/core';
import { Health } from '../services/health';
import { Message } from '../services/message';

@Component({
  selector: 'app-gamescreen',
  imports: [],
  templateUrl: './gamescreen.html',
  styleUrl: './gamescreen.css'
})
export class Gamescreen {
  hp:number = 0
  player = input.required<string>();
  constructor(public health: Health, public messager:Message){
    switch (this.player.toString()){
      case 'p1':
        this.hp == health.p1
        break
      case 'p2':
        this.hp == health.p2
        break;
      case 'p3':
        this.hp == health.p2
        break;
      case 'p4':
        this.hp == health.p4
        break;
    }
  }
}

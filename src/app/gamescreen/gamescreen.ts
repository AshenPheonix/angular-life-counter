import { Component, input, OnInit } from '@angular/core';
import { Health } from '../services/health';
import { Message } from '../services/message';

@Component({
  selector: 'app-gamescreen',
  imports: [],
  templateUrl: './gamescreen.html',
  styleUrl: './gamescreen.css'
})
export class Gamescreen implements OnInit{
  hp:number = 0
  player = input<string>();
  standby:number =0

  constructor(public health: Health){
    if(!this.player){
      return
    }
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
      console.log(`from ${this.player} i get ${this.hp} and ${this.player.toString()}`)
  }

  ngOnInit(){
    console.log(`here ${this.player}`);

  }

  onDam(dir:string) {
    switch(dir){
      case  '-':
        this.standby-=1;
        break;
      case '+':
        this.standby+=1;
        break;
      default:
        console.log('could not read request')
    }
  }
}

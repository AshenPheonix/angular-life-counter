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

  constructor(public health: Health){}

  ngOnInit(){
    if(!this.player){
      return
    }
    console.log(`here ${this.player}, ${this.player.toString()}`);
    switch (this.player()){
      case 'p1':
        this.hp == this.health.p1
    console.log(this.hp)
        break
      case 'p2':
        this.hp == this.health.p2
        break;
      case 'p3':
        this.hp == this.health.p2
        break;
      case 'p4':
        this.hp == this.health.p4
        break;
      default:
          console.log(`broken, ${this.player()}`)
          break;
      }
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

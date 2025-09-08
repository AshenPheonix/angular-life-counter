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
  player = input<string>('');
  standby:number =0
  timer:number=0

  constructor(public health: Health){}

  ngOnInit(){
    if(!this.player){
      return
    }
    switch (this.player()){
      case 'p1':
        this.hp = this.health.p1
        break
      case 'p2':
        this.hp = this.health.p2
        break;
      case 'p3':
        this.hp = this.health.p2
        break;
      case 'p4':
        this.hp = this.health.p4
        break;
      default:

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
    if(this.standby!=0){
      clearTimeout(this.timer)
      console.log('fired', this.standby)
      this.timer=setTimeout(()=>{
        console.log('boing');
        this.health.damage(this.player(), this.standby)
      }, 1000)
    }
  }
}

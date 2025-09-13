import { Component, inject, input, InputSignal, OnChanges, OnInit } from '@angular/core';
import { Health } from '../services/health';
import { Message } from '../services/message';

@Component({
  selector: 'app-gamescreen',
  imports: [],
  templateUrl: './gamescreen.html',
  styleUrl: './gamescreen.css'
})
export class Gamescreen{
  player: InputSignal<string> = input<string>('');
  rotation: InputSignal<string> = input<string>('');
  standby:number =0
  timer:number=0
  css=''
  health = inject(Health);

  getRotation(){
    return  `transform:rotate(${this.rotation() || '0'})`
  }

  fly(){

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
        this.health.damage(this.player(), this.standby)
        this.standby=0;
      }, 1000)
    } else{
      clearTimeout(this.timer);
    }
  }
}

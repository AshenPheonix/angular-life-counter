import { Component } from '@angular/core';
import { Message } from '../services/message';

@Component({
  selector: 'app-window',
  imports: [],
  templateUrl: './window.html',
  styleUrl: './window.css'
})
export class Window {
  display = `display: none;`
  constructor(public serv:Message){}

  toggle(){
    if(this.display){
      this.display = ''
    }else{
      this.display = `display: none;`
    }
  }
}

import { Component } from '@angular/core';
import { Message } from '../services/message';

@Component({
  selector: 'app-window',
  imports: [],
  templateUrl: './window.html',
  styleUrl: './window.css'
})
export class Window {
  constructor(public serv:Message){}
}

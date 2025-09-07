import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Gamescreen } from './gamescreen/gamescreen';
import { Window } from './window/window';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    Gamescreen,
    Window
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-life-counter');
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Health {
  p1:number=40;
  p2:number=40;
  p3:number=40;
  p4:number=40;

  damage(who:string, count: number){
    switch(who){
      case 'p1':
        this.p1 += count;
        break;
      case 'p2':
        this.p2 += count;
        break;
      case 'p3':
        this.p3 += count;
        break;
      case 'p4':
        this.p4 += count;
        break;
      default:
        console.log('could not read, plase try again', who);
    }
  }

  reset(){
    this.p1 = 40;
    this.p2 = 40;
    this.p3 = 40;
    this.p4 = 40;
  }
}

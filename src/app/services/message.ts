import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Message {
  message:string = ''

  setMessage(newMessage:string){
    if (typeof newMessage == 'string') {
      this.message == newMessage;
    }
  }

  clearMessage(){
    this.message = '';
  }
}

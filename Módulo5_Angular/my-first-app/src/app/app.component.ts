import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //não obrigatório
  templateUrl: './app.component.html', //obrigatório
  styleUrls: ['./app.component.css'] //não obrigatório
})
export class AppComponent {
  title:string = 'Luiz Henrique';

  username:string = '';
  showPassword = false;
  log:Array<Date> = [];
  oddNumbers: number[] = [];
  eventNumbers:number[] = [];

  checkUsername(){
    return this.username === '';
  }

  resetUsername(){
    this.username = '';
  }

  onToggleDetails() {
    
  }

}
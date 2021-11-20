import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  showPassword = false;
  log: Array<Date> = [];

  constructor() { }

  ngOnInit(): void {
  }

  btnClick(){
    this.showPassword
     = !this.showPassword;
     this.log.push(new Date());
  }

}

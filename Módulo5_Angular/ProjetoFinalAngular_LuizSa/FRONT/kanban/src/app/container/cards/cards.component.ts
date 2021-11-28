import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/models/cards.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() cards!: Card;

  constructor(
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
  }

  moveRight(){

  }

}

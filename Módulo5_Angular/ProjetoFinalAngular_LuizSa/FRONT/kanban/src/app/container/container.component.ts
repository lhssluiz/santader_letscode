import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../models/cards.model';
import { ApiServices } from '../services/api.services';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent implements OnInit {

  cards!:Card;
  
  constructor(
    private route: ActivatedRoute,
    private api: ApiServices,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.getAllCardsFromAPI();
  }

  getAllCardsFromAPI() {
      this.api.getAllCards().subscribe((cards) => {
        if (!cards) {
          return;
        } else {
          this.cards = cards;
        }
      });

}
}

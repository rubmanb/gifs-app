import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../interfaces/gifs.interface';

@Component({
  selector: 'gifs-cards-component',
  templateUrl: './cards.component.html',
})
export class CardsComponent implements OnInit{


  @Input()
  public gif!: Gif;

  constructor(){}

  ngOnInit(): void {
    if(!this.gif) throw new Error('Gif not founded.');
  }
}

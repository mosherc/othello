import { Component, OnInit } from '@angular/core';
import { Othello } from './othello';

@Component({
  selector: 'othello',
  templateUrl: './othello.component.html',
  styleUrls: ['./othello.component.scss']
})
export class OthelloComponent implements OnInit {

  PLAYER_RED = 1;
  PLAYER_BLUE = -1;
  PLAYER_NONE = 0;

  othello = new Othello();

  constructor() { }

  ngOnInit() {
  }


}

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
  mp3 = new Audio('../../assets/01 Othello, Part 1.mp3');
  isPlaying = false;

  othello = new Othello();

  constructor() { }

  ngOnInit() {
  }

  playOthello() {
    this.isPlaying = this.isPlaying ? false : true;
    this.isPlaying ? this.mp3.pause() : this.mp3.play();
  }

  newGame() {
    this.othello = new Othello();
  }


}

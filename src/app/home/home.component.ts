import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, MatFormField, MatInputModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  scores = [0, 0];
  player1Selected = -1;
  player2Selected = -1;
  resultMessage = '';
  playerName: string = '';
  showGame: boolean = false;
  icons = ['rock', 'paper', 'scissor'];
  selectedIcon = '';
  constructor() {

  }

  save() {
    this.showGame = true;
  }

  play(iconIndex: number, icon: string): void {
    this.selectedIcon = icon;
    this.player1Selected = iconIndex;

    const randomNum = Math.floor(Math.random() * 3);
    this.player2Selected = randomNum;

    this.calculateResults();
  }

  calculateResults(): void {
    const player1pick = this.player1Selected;
    const player2pick = this.player2Selected;

    if (player1pick == player2pick) {
      this.resultMessage = 'Tie';
    }
    else if ((player1pick == 0 && player2pick == 2) ||
      (player1pick == 1 && player2pick == 0) ||
      (player1pick == 2 && player2pick == 1)) {
      this.resultMessage = this.playerName + ' won!';
      this.scores[0] = this.scores[0] + 1;
    }
    else {
      this.resultMessage = 'Computer won!';
      this.scores[1] = this.scores[1] + 1;
    }
  }

  reset(): void {
    this.scores = [0, 0];
    this.resultMessage = '';
    this.selectedIcon = '';
  }
}

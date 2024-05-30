import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public gradient: string='';

  ngOnInit() {
    this.updateGradient();
  }

  updateGradient() {
    const color1 = this.getRandomColor();
    const color2 = this.getRandomColor();
    this.gradient = `linear-gradient(45deg, ${color1}, ${color2})`;
  }

  getRandomColor() {
    const r = this.getRandomValue();
    const g = this.getRandomValue();
    const b = this.getRandomValue();
    return `rgb(${r},${g},${b})`;
  }

  getRandomValue() {
    return Math.floor(Math.random() * (256 - 80) + 80);
  }//
}

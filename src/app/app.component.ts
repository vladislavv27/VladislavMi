import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public gradient: string = '';
  ngOnInit() {
    this.updateGradient();

    setInterval(() => {
      this.updateGradient();
    }, 8000);
  }

  updateGradient() {
    const color1 = this.getRandomColor();
    const color2 = this.getRandomColor();
    this.gradient = `linear-gradient(45deg, ${color1}, ${color2})`;
    const textElements = document.querySelectorAll('.gradient-text');
    textElements.forEach((element) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.backgroundImage = this.gradient;
      htmlElement.style.backgroundClip = 'text';
      htmlElement.style.color = 'transparent';
      htmlElement.style.backgroundSize = '100% 100%';
    });
    const gradientBar = document.querySelectorAll('.gradient-bar');
    gradientBar.forEach((bar) => {
      const barElement = bar as HTMLElement;
      barElement.style.background = this.gradient;
      barElement.style.color = 'transparent';
      barElement.style.backgroundSize = '100% 100%';
    });
  }

  getRandomColor() {
    const r = this.getRandomValue();
    const g = this.getRandomValue();
    const b = this.getRandomValue();
    return `rgb(${r},${g},${b})`;
  }

  getRandomValue() {
    return Math.floor(Math.random() * (256 - 80) + 80);
  }
}

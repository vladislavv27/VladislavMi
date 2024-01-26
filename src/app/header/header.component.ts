import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {

  ngOnInit() {
    this.applyRandomGradientToText();
  }



  applyRandomGradientToText() {
    const randomColor1 = this.getRandomColor();
    const randomColor2 = this.getRandomColor();
  
    const gradient = `linear-gradient(45deg, ${randomColor1}, ${randomColor2})`;
  
    const element = document.querySelector('.gradient-text') as HTMLElement;
    if (element) {
      element.style.backgroundImage = gradient;
      element.style.webkitBackgroundClip = 'text';
      element.style.backgroundClip = 'text';
      element.style.color = 'transparent'; // Make the text transparent
  
      // Set a random gradient for the text color
      element.style.backgroundSize = '100% 100%'; // Ensure the gradient covers the entire text
      element.style.animation = 'textAnimation 2s forwards'; // Add animation for text reveal
    }
  }
  
  getRandomColor() {
    let randomColor;
    do {
      randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    } while (this.isColorBlack(randomColor));
    return randomColor;
  }
  
  isColorBlack(color: string) {
    return color.toLowerCase() === '#000000';
  }
  
  

}

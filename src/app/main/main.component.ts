import { Component, Input, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() gradient = '';


  ngOnInit() {
    AOS.init();
    this.applyRandomGradientToText();

  }

  applyRandomGradientToText() {
    const textElements = document.querySelectorAll('.gradient-text');
    textElements.forEach(element => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.backgroundImage = this.gradient;
      htmlElement.style.backgroundClip = 'text';
      htmlElement.style.color = 'transparent';
      htmlElement.style.backgroundSize = '100% 100%';
    });
    const gradientBar = document.querySelectorAll('.gradient-bar');
    gradientBar.forEach(bar => {
      const barElement = bar as HTMLElement;
      barElement.style.background = this.gradient; 
      barElement.style.color = 'transparent';
      barElement.style.backgroundSize = '100% 100%';
    });
  }
  }

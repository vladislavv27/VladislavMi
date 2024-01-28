import { ViewportScroller } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() gradient = '';

  constructor(private scroller: ViewportScroller, private router: Router) {}

  ngOnInit() {
    this.applyRandomGradientToText();
    
  }

  applyRandomGradientToText() {
    const myName = document.querySelector('.gradient-text') as HTMLElement;
    const typingText = document.querySelector('.typing-text') as HTMLElement;
    if (myName) {
      myName.style.backgroundImage = this.gradient;
      myName.style.backgroundClip = 'text';
      myName.style.color = 'transparent';
      
      myName.style.backgroundSize = '100% 100%';
      myName.style.animation = 'textAnimation 2s forwards';
    }

    var typewriter = new Typewriter(typingText, {
      loop: true,
      delay: 75,
    });
    
    typewriter
      .typeString('Passionate learner, coding my way to mastery.')      
      .pauseFor(2500)
      .deleteChars(45)
      .typeString('Thriving in teamwork, I cherish collaborative environments and always welcome new connections.')  
      .pauseFor(2500)  
      .deleteChars(94)
      .typeString(' I relish the challenge of finding innovative solutions to complex issues.')
      .pauseFor(2500)
      .start();
  }
}

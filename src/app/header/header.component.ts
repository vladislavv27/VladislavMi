import { ViewportScroller } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private scroller: ViewportScroller, private router: Router) {}

  ngOnInit() {
    this.applyRandomGradientToText();
  }

  applyRandomGradientToText() {
    const typingText = document.querySelector('.typing-text') as HTMLElement;
    var typewriter = new Typewriter(typingText, {
      loop: true,
      delay: 75,
    });

    typewriter
      .typeString('Passionate learner, coding my way to mastery.')
      .pauseFor(2500)
      .deleteChars(45)
      .typeString(
        'Thriving in teamwork, I cherish collaborative environments and always welcome new connections.'
      )
      .pauseFor(2500)
      .deleteChars(94)
      .typeString(
        ' I relish the challenge of finding innovative solutions to complex issues.'
      )
      .pauseFor(2500)
      .start();
  }
}

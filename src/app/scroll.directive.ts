import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[scroll]'
})
export class ScrollDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    const menuItems = document.querySelectorAll('.nav-link');
    menuItems.forEach((item: any) => {
      const target = document.querySelector(item.getAttribute('href'));
      if (target) {
        const targetPosition = target.offsetTop;
        const targetHeight = target.offsetHeight;
        if (currentScrollPosition >= targetPosition && currentScrollPosition < targetPosition + targetHeight) {
          this.renderer.addClass(item, 'active');
        } else {
          this.renderer.removeClass(item, 'active');
        }
      }
    });
  }
}

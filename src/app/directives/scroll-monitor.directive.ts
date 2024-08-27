import { Directive, ElementRef, HostListener, Output, EventEmitter, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';
// import document from "$GLOBAL$";

@Directive({
  selector: '[appScrollMonitor]',
  standalone: true
})
// export class ScrollMonitorDirective implements AfterViewInit, OnDestroy {
//
//   @Output() inView: EventEmitter<void> = new EventEmitter();
//   @Output() outOfView: EventEmitter<void> = new EventEmitter();
//
//   private observer!: IntersectionObserver;
//
//   constructor(private el: ElementRef) {}
//
//   ngAfterViewInit(): void {
//     console.log('ScrollIntoViewDirective initialized for element:', this.el.nativeElement);
//
//     this.observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           console.log('Element is in view:', entry.target);
//           this.inView.emit();
//         } else {
//           console.log('Element is out of view:', entry.target);
//           this.outOfView.emit();
//         }
//       });
//     }, {
//       threshold: 0.1 // Trigger when at least 10% of the element is in view
//     });
//
//     this.observer.observe(this.el.nativeElement);
//     console.log('Observer is now watching the element:', this.el.nativeElement);
//   }
//
//   ngOnDestroy(): void {
//     if (this.observer) {
//       this.observer.disconnect();
//       console.log('Observer disconnected for element:', this.el.nativeElement);
//     }
//   }
// }


export class ScrollMonitorDirective {

  private hasAnimated = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (!this.hasAnimated && this.isElementInView()) {
      this.triggerAnimation();
    }
  }

  private isElementInView(): boolean {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const lowerBound = windowHeight * 0.9;
    const upperBound = windowHeight * 1.1;

    return rect.bottom >= lowerBound && rect.bottom <= upperBound;
  }

  private triggerAnimation() {
    this.hasAnimated = true;
    this.renderer.removeClass(this.el.nativeElement, 'fade-animation');
  }
}

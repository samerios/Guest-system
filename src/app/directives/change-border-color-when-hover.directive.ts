import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeBorderColorWhenHover]'
})

/** Change border color whe hover directive */
export class ChangeBorderColorWhenHoverDirective implements OnInit {

  /**
   * 
   * @param elementRef Element reference for control DOM
   */
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {

    /** On init update color */
    this.onMouseLeave();
  }

  /** Color */
  @Input() color: string = '';

  /** Hover color */
  @Input() hoverColor: string = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.color = this.hoverColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.color = this.color;
  }
}

import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[alertToast]',
})
export class AlertToastDirective {
  @Input() set alertToast(alertColor: string) {
    this.el.nativeElement.classList.add(alertColor);
  }
  
  constructor(private el: ElementRef) {}
  deleteAlerts(){
    this.el.nativeElement.classList.remove([])
  }
}

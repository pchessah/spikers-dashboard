import { Directive, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
  selector: '[appNodePopoverTrigger]'
})
export class NodePopoverTriggerDirective {
  @Output() nodePopoverEnter = new EventEmitter<Event>();
  @Output() nodePopoverLeave = new EventEmitter<void>();
  @Output() nodePopoverTouchStart = new EventEmitter<Event>();
  @Output() nodePopoverTouchEnd = new EventEmitter<void>();

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: Event) {
    this.nodePopoverEnter.emit(event);
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.nodePopoverLeave.emit();
  }
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: Event) {
    this.nodePopoverTouchStart.emit(event);
  }
  @HostListener('touchend')
  onTouchEnd() {
    this.nodePopoverTouchEnd.emit();
  }
}
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-expandable-section',
  standalone: true,
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './expandable-section.component.html',
  styleUrl: './expandable-section.component.scss'
})
export class ExpandableSectionComponent {
  @Input() isExpanded: boolean = false;
  @Input() title: string = "";
  @Input() showBottomLine = true;
  @Output() toggle = new EventEmitter();

  toggleSection(): void {
    this.toggle.emit();
  }
}

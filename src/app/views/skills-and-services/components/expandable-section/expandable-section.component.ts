import {Component, Input} from '@angular/core';
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
  isExpanded: boolean = false;
  @Input() title: string = "";
  @Input() showBottomLine = true;

  toggleSection(): void {
    this.isExpanded = !this.isExpanded;
  }
}

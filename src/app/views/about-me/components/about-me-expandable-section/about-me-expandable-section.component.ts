import {Component, Input} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-about-me-expandable-section',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './about-me-expandable-section.component.html',
  styleUrl: './about-me-expandable-section.component.scss'
})
export class AboutMeExpandableSectionComponent {
  isExpanded: boolean = false;
  @Input() name: string = "";
  @Input() position: string = "";
  @Input() text: string = "";
  @Input() showBottomLine = true;

  toggleSection(): void {
    this.isExpanded = !this.isExpanded;
  }
}

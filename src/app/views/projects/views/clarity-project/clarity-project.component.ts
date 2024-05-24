import { Component } from '@angular/core';
import {Location, NgForOf} from "@angular/common";
import {ExpandableSectionComponent} from "../../../skills-and-services/components/expandable-section/expandable-section.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-clarity-project',
  standalone: true,
  imports: [
    ExpandableSectionComponent,
    NgForOf,
    RouterLink
  ],
  templateUrl: './clarity-project.component.html',
  styleUrl: './clarity-project.component.scss'
})
export class ClarityProjectComponent {
  hashes = ['Consulting', 'CRM', 'Data integration', 'E-Commerce', 'Development'];

  constructor(private location: Location) {
  }

  goBack() {
    this.location.back()
  }
}

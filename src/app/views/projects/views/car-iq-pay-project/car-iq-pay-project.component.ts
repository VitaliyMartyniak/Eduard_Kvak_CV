import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {Location, NgForOf} from "@angular/common";
import {ExpandableSectionComponent} from "../../../skills-and-services/components/expandable-section/expandable-section.component";

@Component({
  selector: 'app-car-iq-pay-project',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    ExpandableSectionComponent
  ],
  templateUrl: './car-iq-pay-project.component.html',
  styleUrl: './car-iq-pay-project.component.scss'
})
export class CarIqPayProjectComponent {
  hashes = ['Automotive', 'Financial services', 'FinTech', 'Fleet management', 'Payments'];

  constructor(private location: Location) {
  }

  goBack() {
    this.location.back()
  }
}

import { Component } from '@angular/core';
import {Location, NgForOf} from "@angular/common";
import {ExpandableSectionComponent} from "../../../skills-and-services/components/expandable-section/expandable-section.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-intelas-project',
  standalone: true,
  imports: [
    ExpandableSectionComponent,
    NgForOf,
    RouterLink
  ],
  templateUrl: './intelas-project.component.html',
  styleUrl: './intelas-project.component.scss'
})
export class IntelasProjectComponent {
  hashes = ['Real estate', 'FinTech', 'Data integration'];

  constructor(private location: Location) {
  }

  goBack() {
    this.location.back()
  }
}

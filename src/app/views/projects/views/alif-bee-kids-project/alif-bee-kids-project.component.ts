import { Component } from '@angular/core';
import {Location, NgForOf} from "@angular/common";
import {ExpandableSectionComponent} from "../../../skills-and-services/components/expandable-section/expandable-section.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-alif-bee-kids-project',
  standalone: true,
  imports: [
    ExpandableSectionComponent,
    NgForOf,
    RouterLink
  ],
  templateUrl: './alif-bee-kids-project.component.html',
  styleUrl: './alif-bee-kids-project.component.scss'
})
export class AlifBeeKidsProjectComponent {
  hashes = ['Learning platform'];

  constructor(private location: Location) {
  }

  goBack() {
    this.location.back()
  }
}

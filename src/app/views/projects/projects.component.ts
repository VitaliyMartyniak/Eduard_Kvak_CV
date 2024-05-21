import { Component } from '@angular/core';
import {ExpandableSectionComponent} from "../skills-and-services/components/expandable-section/expandable-section.component";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-projects',
  standalone: true,
    imports: [
        ExpandableSectionComponent,
        NgForOf,
        RouterLink
    ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      img: 'img',
      title: 'Car IQ Pay',
      hashes: ['Automotive', 'Financial services', 'FinTech', 'Fleet management', 'Payments']
    }
  ]
}

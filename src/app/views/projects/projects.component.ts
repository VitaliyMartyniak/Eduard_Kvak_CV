import { Component } from '@angular/core';
import {ExpandableSectionComponent} from "../skills-and-services/components/expandable-section/expandable-section.component";
import {NgForOf, NgStyle} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ExpandableSectionComponent,
    NgForOf,
    RouterLink,
    NgStyle
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  constructor(private router: Router) {
  }

  projects = [
    {
      name: 'car-iq-pay',
      title: 'Car IQ Pay',
      hashes: ['Automotive', 'Financial services', 'FinTech', 'Fleet management', 'Payments'],
    },
    {
      name: 'clarity',
      title: 'Clarity',
      hashes: ['Consulting', 'CRM', 'Data integration', 'E-Commerce', 'Development'],
    },
    {
      name: 'intelas',
      title: 'Intelas',
      hashes: ['Real estate', 'FinTech', 'Data integration'],
    },
    {
      name: 'alifBee-kids',
      title: 'AlifBee Kids',
      hashes: ['Learing platform'],
    }
  ]

  getBackgroundImageUrl(name: string) {
    return `url('assets/images/${name}.png')`
  }

  navigateToProject(name: string) {
    this.router.navigate([`projects/${name}`]);
  }
}

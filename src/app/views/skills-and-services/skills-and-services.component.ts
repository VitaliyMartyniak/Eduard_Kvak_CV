import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {ExpandableSectionComponent} from "./components/expandable-section/expandable-section.component";
import {Location, NgForOf} from "@angular/common";

@Component({
  selector: 'app-skills-and-services',
  standalone: true,
  imports: [
    RouterLink,
    ExpandableSectionComponent,
    NgForOf
  ],
  templateUrl: './skills-and-services.component.html',
  styleUrl: './skills-and-services.component.scss'
})
export class SkillsAndServicesComponent {

  constructor(private location: Location) {
  }

  expandablesDataEn = [
    {
      title: 'Design strategy',
      items: ['Problem definition', 'Ideation', 'Design process'],
    },
    {
      title: 'Interaction design',
      items: ['UX patterns', 'Prototyping', 'UX evaluation'],
    },
    {
      title: 'User interface design',
      items: ['Best practices', 'Accessibility', 'Design systems/Design documentation', 'Light/dark theme', 'White-label', 'Product assets', 'Mobile/Saas', 'Adaptive/responsive design', 'Apple CarPlay/Android Auto/AAOS'],
    },
    {
      title: 'UX leadership',
      items: ['Hiring', 'Mentoring', 'Team management'],
    },
    {
      title: 'Business acumen',
      items: ['Industry knowledge', 'Market research', 'Strategic thinking'],
    },
    {
      title: 'Product management',
      items: ['Project management', 'Prioritizing', 'Product growth'],
    },
    {
      title: 'Data analytics',
      items: ['Metrics & KPIs', 'Hypothesis definition', 'User testing', 'User interview', 'A/B testing'],
    },
    {
      title: 'Soft skills',
      items: ['Communication', 'Collaboration', 'Critical thinking'],
    },
  ]

  goBack() {
    this.location.back()
  }
}

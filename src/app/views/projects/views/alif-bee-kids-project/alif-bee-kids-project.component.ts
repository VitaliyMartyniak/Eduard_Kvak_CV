import { Component } from '@angular/core';
import {Location, NgForOf} from "@angular/common";
import {ExpandableSectionComponent} from "../../../../components/expandable-section/expandable-section.component";
import {RouterLink} from "@angular/router";
import {SimpleCardsComponent} from "../../../../components/simple-cards/simple-cards.component";
import {SingleProjectFooterComponent} from "../../components/single-project-footer/single-project-footer.component";
import { SingleProjectHeaderComponent } from "../../components/single-project-header/single-project-header.component";
import { ScrollMonitorDirective } from "../../../../directives/scroll-monitor.directive";

@Component({
  selector: 'app-alif-bee-kids-project',
  standalone: true,
  imports: [
    ExpandableSectionComponent,
    NgForOf,
    RouterLink,
    SimpleCardsComponent,
    SingleProjectFooterComponent,
    SingleProjectHeaderComponent,
    ScrollMonitorDirective
  ],
  templateUrl: './alif-bee-kids-project.component.html',
  styleUrl: './alif-bee-kids-project.component.scss'
})
export class AlifBeeKidsProjectComponent {
  cards = [
    {
      icon: 'star',
      title: 'Enhanced registration flow',
      text: 'The new, streamlined registration process addressed the ' +
        'identified pain points, making it more intuitive and user-friendly.'
    },
    {
      icon: 'cloud',
      title: 'Social network integration',
      text: 'We successfully added the ability for users to sign in via ' +
        'social networks, offering greater convenience and flexibility.'
    },
    {
      icon: 'graph',
      title: 'Reduced drop-off rate',
      text: "As a result of these improvements, the user drop-off rate " +
        "during registration was reduced to less than 10%."
    }
  ];

  workingProcessList = [
    {
      title: 'Research',
      content: `<span class="text">1. Use analytics to identify user pain points and drop-off areas.<br>
            2. Conduct competitor analysis to find industry standards and improvement opportunities.<br>
            3. Inform design strategy for a user-friendly registration flow.</span>`,
      opened: false,
      id: 1,
    },
    {
      title: 'Ideate',
      content: `<span class="text">1. Hold intensive brainstorming sessions with stakeholders.<br>
            2. Create and refine wireframes to explore different design directions.<br>
            3. Prioritize ideas based on feasibility, user impact, and alignment with project goals.</span>`,
      opened: false,
      id: 2,
    },
    {
      title: 'Design',
      content: `<span class="text">1. Transform top ideas into high-fidelity designs.<br>
            2. Create a seamless and user-friendly registration flow.<br>
            3. Ensure consistency with the company’s visual identity.</span>`,
      opened: false,
      id: 3,
    },
    {
      title: 'Deliver',
      content: `<span class="text">1. Prepare comprehensive design documentation and resources.<br>
            2. Ensure smooth handover and efficient implementation of the new registration flow.</span>`,
      opened: false,
      id: 4,
    },
  ]

  toggleSection(id: number) {
    this.workingProcessList.forEach(item => {
      if (item.id !== id) {
        item.opened = false;
      } else {
        item.opened = !item.opened;
      }
    })
  }
}

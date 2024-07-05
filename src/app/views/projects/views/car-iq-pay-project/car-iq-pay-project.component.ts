import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {Location, NgForOf} from "@angular/common";
import {ExpandableSectionComponent} from "../../../../components/expandable-section/expandable-section.component";
import {SimpleCardsComponent} from "../../../../components/simple-cards/simple-cards.component";
import {SingleProjectFooterComponent} from "../../components/single-project-footer/single-project-footer.component";

@Component({
  selector: 'app-car-iq-pay-project',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    ExpandableSectionComponent,
    SimpleCardsComponent,
    SingleProjectFooterComponent
  ],
  templateUrl: './car-iq-pay-project.component.html',
  styleUrl: './car-iq-pay-project.component.scss'
})
export class CarIqPayProjectComponent {
  cards = [
    {
      icon: 'trophy',
      title: 'Market leaders',
      text: 'By eliminating the need for physical cards, users can now seamlessly pay for services via direct payment or Apple Pay/Google Pay.'
    },
    {
      icon: 'graph',
      title: 'Customer satisfaction',
      text: 'The customer satisfaction rate is 90%, with revenue exceeding $1 million.'
    },
    {
      icon: 'innovative-integration',
      title: 'Innovative integration',
      text: "The mobile application will be the world's first to enable purchases through Apple CarPlay and Android Auto."
    },
    {
      icon: 'accessibility',
      title: 'Accessibility',
      text: 'Both products adheres to the AA level of WCAG requirements, ensuring accessibility for users with disabilities.'
    },
    {
      icon: 'scalability',
      title: 'Scalability',
      text: 'White-label products, multiple services, unique features, and more.'
    },
    {
      icon: 'palette',
      title: 'Design system',
      text: 'Clear design and collaboration principles, guidelines for newcomer designers, variables and tokens, and up-to-date Figma features.'
    }
  ];

  workingProcessList = [
    {
      title: 'Plan',
      content: `<span class="text">1. Analyze data and feedback from the previous sprint.<br>
            2. Brainstorm and define new features and enhancements.<br>
            3. Prioritize features and assign tasks.</span>`,
      opened: false,
      id: 1,
    },
    {
      title: 'Design',
      content: `<span class="text">1. Create and refine wireframes for new features.<br>
            2. Develop high-fidelity mockups, prototypes, and design documentation.<br>
            3. Conduct collaborative sessions with developers for design alignment.</span>`,
      opened: false,
      id: 2,
    },
    {
      title: 'Develop',
      content: `<span class="text">1. Implement features based on design assets and documentation.<br>
            2. Collaborate to address any issues or changes.</span>`,
      opened: false,
      id: 3,
    },
    {
      title: 'Test',
      content: `<span class="text">1. Deploy the new build to a mock environment.<br>
            2. Conduct thorough testing for functionality and design integrity.<br>
            3. Create detailed bug tickets for any discovered issues.</span>`,
      opened: false,
      id: 4,
    },
    {
      title: 'Launch',
      content: `<span class="text">1. Release the new build to the production environment.<br>
            2. Monitor user interactions using tools like Pendo and conduct A/B testing.<br>
            3. Gather qualitative feedback through user interviews or usability testing.</span>`,
      opened: false,
      id: 5,
    },
  ]

  constructor(private location: Location) {
  }

  goBack() {
    this.location.back()
  }

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

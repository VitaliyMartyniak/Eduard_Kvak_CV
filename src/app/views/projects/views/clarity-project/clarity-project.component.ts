import { Component } from '@angular/core';
import {Location, NgForOf} from "@angular/common";
import {ExpandableSectionComponent} from "../../../../components/expandable-section/expandable-section.component";
import {RouterLink} from "@angular/router";
import {SimpleCardsComponent} from "../../../../components/simple-cards/simple-cards.component";
import {SingleProjectFooterComponent} from "../../components/single-project-footer/single-project-footer.component";
import { SingleProjectHeaderComponent } from "../../components/single-project-header/single-project-header.component";

@Component({
  selector: 'app-clarity-project',
  standalone: true,
  imports: [
    ExpandableSectionComponent,
    NgForOf,
    RouterLink,
    SimpleCardsComponent,
    SingleProjectFooterComponent,
    SingleProjectHeaderComponent
  ],
  templateUrl: './clarity-project.component.html',
  styleUrl: './clarity-project.component.scss'
})
export class ClarityProjectComponent {
  cards = [
    {
      icon: 'enhanced-user-experience',
      title: 'Enhanced user experience',
      text: 'The extensive user research and competitor analysis enabled us to ' +
        'tailor the platform to user needs, behaviors, and preferences, resulting ' +
        'in a highly intuitive and user-friendly interface.'
    },
    {
      icon: 'comprehensive-product',
      title: 'Comprehensive product architecture',
      text: 'The innovative architecture seamlessly combined features from YouTube, ' +
        'Medium, and StackOverflow, offering a unique and engaging user experience ' +
        'that supported diverse content types and interaction methods.'
    },
    {
      icon: 'commenting-system',
      title: 'Effective commenting system',
      text: "The ability for users to leave comments in various formats " +
        "(voice messages, photos, videos, text) was successfully implemented, " +
        "fostering dynamic and versatile user interactions."
    },
    {
      icon: 'user-roles',
      title: 'User roles and device support',
      text: 'The platform efficiently supported different user roles and device ' +
        'types, ensuring accessibility and functionality across various ' +
        'user scenarios and technological environments.'
    },
  ];

  workingProcessList = [
    {
      title: 'Research',
      content: `<span class="text">1. Conduct comprehensive analysis to gather insights.<br>
            2. Study user behaviors and preferences.<br>
            3. Examine competitors to identify trends and opportunities.<br>
            4. Brainstorm to generate innovative ideas.</span>`,
      opened: false,
      id: 1,
    },
    {
      title: 'Ideate',
      content: `<span class="text">1. Host workshops with stakeholders to brainstorm solutions.<br>
            2. Create wireframes to explore different design approaches.<br>
            3. Choose the best ideas that align with project goals.</span>`,
      opened: false,
      id: 2,
    },
    {
      title: 'Design',
      content: `<span class="text">1. Develop detailed and polished designs.<br>
            2. Refine top ideas into visually compelling, user-friendly interfaces.<br>
            3. Establish a comprehensive UI Kit for consistency.</span>`,
      opened: false,
      id: 3,
    },
    {
      title: 'Review',
      content: `<span class="text">1. Test and gather feedback on designs.<br>
            2. Adjust designs based on feedback from stakeholders and team members.</span>`,
      opened: false,
      id: 4,
    },
    {
      title: 'Deliver',
      content: `<span class="text">1. Prepare all resources and conduct a session with developers.<br>
            2. Ensure clear understanding of designs and accurate implementation.</span>`,
      opened: false,
      id: 5,
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

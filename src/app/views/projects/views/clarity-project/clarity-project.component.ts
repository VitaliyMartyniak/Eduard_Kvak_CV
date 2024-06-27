import { Component } from '@angular/core';
import {Location, NgForOf} from "@angular/common";
import {ExpandableSectionComponent} from "../../../../components/expandable-section/expandable-section.component";
import {RouterLink} from "@angular/router";
import {SimpleCardsComponent} from "../../../../components/simple-cards/simple-cards.component";
import {SingleProjectFooterComponent} from "../../components/single-project-footer/single-project-footer.component";

@Component({
  selector: 'app-clarity-project',
  standalone: true,
    imports: [
        ExpandableSectionComponent,
        NgForOf,
        RouterLink,
        SimpleCardsComponent,
        SingleProjectFooterComponent
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

  constructor(private location: Location) {
  }

  goBack() {
    this.location.back()
  }
}

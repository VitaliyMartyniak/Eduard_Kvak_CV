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

  constructor(private location: Location) {
  }

  goBack() {
    this.location.back()
  }
}

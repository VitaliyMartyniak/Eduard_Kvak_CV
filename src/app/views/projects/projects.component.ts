import { Component } from '@angular/core';
import {ExpandableSectionComponent} from "../../components/expandable-section/expandable-section.component";
import {Location, NgForOf, NgStyle} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {NavigationComponent} from "../../components/navigation/navigation.component";
import {ProjectCardsComponent} from "../../components/project-cards/project-cards.component";
import {FooterNavigationComponent} from "../../components/footer-navigation/footer-navigation.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ExpandableSectionComponent,
    NgForOf,
    RouterLink,
    NgStyle,
    NavigationComponent,
    ProjectCardsComponent,
    FooterNavigationComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  constructor(private router: Router, private location: Location) {
  }

  projects = [
    {
      name: 'car-iq-pay',
      title: 'Car IQ Pay',
      subtitle: 'The first payment platform to enable vehicles to initiate, validate, and complete authorized transactions.',
      details: [
        {
          title: 'Role',
          data: 'Lead product designer',
        },
        {
          title: 'Team',
          data: '2 designers, 2 product managers, 2 front-end developers',
        },
        {
          title: 'Deliverables',
          data: 'Mobile app (iOS & Android), Web app (responsive), Design system & documentation, and more',
        }
      ]
    },
    {
      name: 'clarity',
      title: 'Clarity',
      subtitle: 'Advanced solutions for seamless content sharing and engaging interactive reading.',
      details: [
        {
          title: 'Role',
          data: 'Lead product designer',
        },
        {
          title: 'Team',
          data: '1 designer, 1 project manager',
        },
        {
          title: 'Deliverables',
          data: 'Q&A platform, e-Book reader (responsive)',
        }
      ]
    },
    {
      name: 'intelas',
      title: 'Intelas',
      subtitle: 'A leading platform in financial data standardization, aimed at real estate asset managers and accountants.',
      details: [
        {
          title: 'Role',
          data: 'Lead product designer',
        },
        {
          title: 'Team',
          data: '1 designer, 1 business analytic',
        },
        {
          title: 'Deliverables',
          data: 'Web app',
        }
      ]
    },
    {
      name: 'alifBee-kids',
      title: 'AlifBee Kids',
      subtitle: 'A comprehensive mobile app that helps children learn the Arabic language through an engaging and gamified experience.',
      details: [
        {
          title: 'Role',
          data: 'Lead product designer',
        },
        {
          title: 'Team',
          data: '1 designer',
        },
        {
          title: 'Deliverables',
          data: 'Mobile app (iOS & Android)',
        }
      ]
    },
  ]
}

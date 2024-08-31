import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
import {NavigationComponent} from "../../components/navigation/navigation.component";
import {ProjectCardsComponent} from "../../components/project-cards/project-cards.component";
import {FooterNavigationComponent} from "../../components/footer-navigation/footer-navigation.component";
import {SimpleCardsComponent} from "../../components/simple-cards/simple-cards.component";
import { ScrollMonitorDirective } from "../../directives/scroll-monitor.directive";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NavigationComponent,
    ProjectCardsComponent,
    FooterNavigationComponent,
    SimpleCardsComponent,
    ScrollMonitorDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  cards = [
    {
      icon: 'compass',
      title: 'Design strategy',
      text: 'Developing comprehensive design strategies that align with business goals and user needs, ensuring a seamless and impactful user experience.'
    },
    {
      icon: 'bubbles',
      title: 'Data analytics',
      text: 'Utilizing data analytics to inform design decisions, optimize user experiences, and measure the effectiveness of design solutions to drive continuous improvement.'
    },
    {
      icon: 'trophy',
      title: 'UX leadership',
      text: 'Leading and mentoring design teams, fostering a collaborative environment, and driving innovative UX practices across projects.'
    },
    {
      icon: 'table',
      title: 'User interfaces',
      text: 'Crafting intuitive and visually appealing user interfaces that enhance usability and delight users across digital platforms, ensuring consistency and accessibility.'
    },
    {
      icon: 'window',
      title: 'Interaction design',
      text: 'Designing interactive elements that improve user engagement, ensuring a smooth and intuitive user journey.'
    },
    {
      icon: 'palette',
      title: 'Design documentation',
      text: 'Creating detailed design documentation to communicate design decisions, guidelines, and processes clearly and effectively.'
    }
  ]

  projects = [
    {
      name: 'factually-health',
      title: 'Factually Health',
      subtitle: 'An AI-powered platform that provides accurate, comprehensive information on any health topic, combating misinformation and improving patient engagement.',
      deliverables: [
        'Web app (responsive)',
        'Guidelines for developers',
        'Design system',
        'Prototype'
      ]
    },
    {
      name: 'car-iq-pay',
      title: 'Car IQ Pay',
      subtitle: 'The first payment platform to enable vehicles to initiate, validate, and complete authorized transactions.',
      deliverables: [
        'Mobile app (iOS & Android)',
        'Integrations (Apple & Google Pay, White-labels, and more)',
        'Web app (responsive)',
        'Design system & Documentation',
        'Guidelines for designers',
        'Prototypes, Email template, Invoice template, and more'
      ]
    },
  ]

  constructor() {
  }
}

import {AfterViewInit, Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {NgForOf} from "@angular/common";
import {NavigationComponent} from "../../components/navigation/navigation.component";
import {ProjectCardsComponent} from "../../components/project-cards/project-cards.component";
import {FooterNavigationComponent} from "../../components/footer-navigation/footer-navigation.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NavigationComponent,
    ProjectCardsComponent,
    FooterNavigationComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('borderRadiusAnimation', [
      state('cornered', style({
        borderRadius: '0px',
      })),
      state('rounded', style({
        borderRadius: '56px'
      })),
      transition('cornered <=> rounded', [
        animate('0.5s ease-out')
      ]),
    ]),
  ],
})
export class HomeComponent implements AfterViewInit{
  borderState = 'cornered'
  mainText = 'Hi, I\'m Ed, a seasoned product designer with over 6 years of experience. I craft innovative digital experiences that blend user needs with business goals. Let\'s collaborate to turn your vision into reality!';
  typedText: string = '';
  textIndex: number = 0;

  cards = [
    {
      icon: 'compass',
      title: 'Design strategy',
      text: 'Developing comprehensive design strategies that align with business goals and user needs, ensuring a seamless and impactful user experience.'
    },
    {
      icon: 'bubbles',
      title: 'Design strategy',
      text: 'Developing comprehensive design strategies that align with business goals and user needs, ensuring a seamless and impactful user experience.'
    },
    {
      icon: 'trophy',
      title: 'Design strategy',
      text: 'Developing comprehensive design strategies that align with business goals and user needs, ensuring a seamless and impactful user experience.'
    },
    {
      icon: 'table',
      title: 'Design strategy',
      text: 'Developing comprehensive design strategies that align with business goals and user needs, ensuring a seamless and impactful user experience.'
    },
    {
      icon: 'window',
      title: 'Design strategy',
      text: 'Developing comprehensive design strategies that align with business goals and user needs, ensuring a seamless and impactful user experience.'
    },
    {
      icon: 'palette',
      title: 'Design strategy',
      text: 'Developing comprehensive design strategies that align with business goals and user needs, ensuring a seamless and impactful user experience.'
    }
  ]

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
  ]

  constructor() {
  }

  ngAfterViewInit() {
    this.typeWriter();
    setTimeout(() => {
      this.borderState = 'rounded';
    }, 1000)
  }

  typeWriter() {
    if (this.textIndex < this.mainText.length) {
      this.typedText += this.mainText.charAt(this.textIndex);
      this.textIndex++;
      setTimeout(() => {
        this.typeWriter();
      }, 10);
    }
  }
}

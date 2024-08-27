import { Component } from '@angular/core';
import {Location, NgForOf} from "@angular/common";
import {ExpandableSectionComponent} from "../../../../components/expandable-section/expandable-section.component";
import {RouterLink} from "@angular/router";
import {SimpleCardsComponent} from "../../../../components/simple-cards/simple-cards.component";
import {SingleProjectFooterComponent} from "../../components/single-project-footer/single-project-footer.component";
import { SingleProjectHeaderComponent } from "../../components/single-project-header/single-project-header.component";
import { ScrollMonitorDirective } from "../../../../directives/scroll-monitor.directive";

@Component({
  selector: 'app-intelas-project',
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
  templateUrl: './intelas-project.component.html',
  styleUrl: './intelas-project.component.scss'
})
export class IntelasProjectComponent {
  cards = [
    {
      icon: 'data-driven-management-orange',
      title: 'Streamlined data management',
      text: 'The platform successfully standardized and centralized ' +
        'real estate data, making it easier for managers to collect ' +
        'and work with the information.'
    },
    {
      icon: 'window',
      title: 'Advanced features implementation',
      text: 'Clear and easy to read table, ability so swap columns with ' +
        'rows, add/remove/pin table columns, report builders, advanced ' +
        'filtering and sorting capabilities, and more.'
    },
    {
      icon: 'prototyping-orange',
      title: 'Effective prototyping',
      text: "The functional prototype effectively demonstrated the product's " +
        "capabilities, garnering positive feedback from investors. That helped " +
        "stakeholders secure additional funding for further development and " +
        "scaling of the product."
    }
  ];

  workingProcessList = [
    {
      title: 'Research',
      content: `<span class="text">1. Conduct in-depth user interviews and surveys.<br>
            2. Perform competitor analysis to identify market trends and gaps.</span>`,
      opened: false,
      id: 1,
    },
    {
      title: 'Ideate',
      content: `<span class="text">1. Host brainstorming sessions and workshops with stakeholders.<br>
            2. Create high-fidelity wireframes to explore design decisions.<br>
            3. Prioritize ideas based on feasibility, impact, and alignment with project objectives.</span>`,
      opened: false,
      id: 2,
    },
    {
      title: 'Design',
      content: `<span class="text">1. Develop detailed and polished designs.<br>
            2. Create a UI Kit for design consistency and efficiency.</span>`,
      opened: false,
      id: 3,
    },
    {
      title: 'Prototype',
      content: `<span class="text">1. Develop an interactive, functional prototype.<br>
            2. Highlight key functionalities and gather feedback for refinement.</span>`,
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

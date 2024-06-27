import { Component } from '@angular/core';
import {Location, NgForOf} from "@angular/common";
import {ExpandableSectionComponent} from "../../../../components/expandable-section/expandable-section.component";
import {RouterLink} from "@angular/router";
import {SimpleCardsComponent} from "../../../../components/simple-cards/simple-cards.component";
import {SingleProjectFooterComponent} from "../../components/single-project-footer/single-project-footer.component";

@Component({
  selector: 'app-intelas-project',
  standalone: true,
    imports: [
        ExpandableSectionComponent,
        NgForOf,
        RouterLink,
        SimpleCardsComponent,
        SingleProjectFooterComponent
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

  constructor(private location: Location) {
  }

  goBack() {
    this.location.back()
  }
}

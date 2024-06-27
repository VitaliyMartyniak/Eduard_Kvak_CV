import { Component } from '@angular/core';
import {Location, NgForOf} from "@angular/common";
import {ExpandableSectionComponent} from "../../../../components/expandable-section/expandable-section.component";
import {RouterLink} from "@angular/router";
import {SimpleCardsComponent} from "../../../../components/simple-cards/simple-cards.component";
import {SingleProjectFooterComponent} from "../../components/single-project-footer/single-project-footer.component";

@Component({
  selector: 'app-alif-bee-kids-project',
  standalone: true,
    imports: [
        ExpandableSectionComponent,
        NgForOf,
        RouterLink,
        SimpleCardsComponent,
        SingleProjectFooterComponent
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

  constructor(private location: Location) {
  }

  goBack() {
    this.location.back()
  }
}

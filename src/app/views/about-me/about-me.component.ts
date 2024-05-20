import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {AboutMeExpandableSectionComponent} from "./components/about-me-expandable-section/about-me-expandable-section.component";
import {ExpandableSectionComponent} from "../skills-and-services/components/expandable-section/expandable-section.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    RouterLink,
    AboutMeExpandableSectionComponent,
    ExpandableSectionComponent,
    NgForOf
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  expandablesDataEn = [
    {
      name: 'Roman Kaminechny',
      position: 'Head of the Design Department at Cieden',
      text: 'Eduard impressed me with his attention to detail and ability to propose effective and creative solutions ' +
        'to complex problems. He always approached his work with great meticulousness, ensuring a high quality of ' +
        'the final product. His design solutions were not only visually appealing but also user-friendly.'
    },
  ]
}

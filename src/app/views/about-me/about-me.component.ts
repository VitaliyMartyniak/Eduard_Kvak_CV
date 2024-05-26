import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {AboutMeExpandableSectionComponent} from "./components/about-me-expandable-section/about-me-expandable-section.component";
import {ExpandableSectionComponent} from "../skills-and-services/components/expandable-section/expandable-section.component";
import {NgForOf} from "@angular/common";
import {Location} from '@angular/common';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {map, Observable} from "rxjs";
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    RouterLink,
    AboutMeExpandableSectionComponent,
    ExpandableSectionComponent,
    NgForOf,
    HttpClientModule
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  constructor(private location: Location, private http: HttpClient) {
  }

  expandablesDataEn = [
    {
      name: 'Larry Aasen',
      position: 'Lead Mobile Engineer (Flutter) at Car IQ',
      text: 'I had the pleasure of collaborating with Ed on our latest project with Car IQ, and the ' +
        'experience was phenomenal. His keen eye for user-centric design and innovative approach to ' +
        'problem-solving dramatically enhanced the quality of our mobile app, and his detailed use of ' +
        'Figma elevated our implementation. His proactive communication and ability to translate complex ' +
        'requirements into elegant solutions made the development process smooth, easy, and enjoyable. ' +
        'Ed’s contributions were invaluable, and his expertise in UX design truly set our mobile app apart.'
    },
    {
      name: 'Sara Elizabeth Rutledge',
      position: 'Senior Product Designer at HatchWorks',
      text: 'I had the pleasure of working with Ed at Car IQ, where we collaborated on both the mobile app ' +
        "and web application projects. As a product designer, Ed's attention to detail is unparalleled, " +
      'making him exceptional at creating design systems. His creativity shines through in every project, ' +
      "and he has a remarkable ability to clearly articulate his ideas to the team. Ed's combination " +
        'of precision and innovative thinking makes him a valuable asset to any design team.'
    },
    {
      name: 'Roman Kaminechny',
      position: 'Head of the Design Department at Cieden',
      text: 'Eduard impressed me with his attention to detail and ability to propose effective and ' +
        'creative solutions to complex problems. He always approached his work with great meticulousness, ' +
        'ensuring a high quality of the final product. His design solutions were not only visually ' +
        'appealing but also user-friendly. Throughout the project, Eduard demonstrated excellent communication ' +
        'skills and teamwork with other team members. He was open to feedback and always sought to improve ' +
        'his solutions, taking into account the opinions of his colleagues. This contributed to creating a ' +
        'positive work atmosphere and increased the efficiency of the project team. Eduard successfully ' +
        'conducted all design activities, which contributed to achieving an excellent result. I am confident ' +
        'that his professionalism, creativity, and ability to work in a team will be valuable assets to any ' +
        'company. I highly recommend Eduard Kvak as a highly qualified and reliable Product Designer.'
    },
  ]

  goBack() {
    this.location.back()
  }

  downloadPdf(): void {
    this.http.get('assets/pdf/CV.pdf', { responseType: 'blob' }).pipe(
      map((blob: Blob) => {
        saveAs(blob, 'Eduard Kvak CV');
      })
    ).subscribe();
  }
}

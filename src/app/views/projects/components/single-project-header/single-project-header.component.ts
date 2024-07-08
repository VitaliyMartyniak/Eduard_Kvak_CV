import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-single-project-header',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './single-project-header.component.html',
  styleUrl: './single-project-header.component.scss'
})
export class SingleProjectHeaderComponent {

  constructor(private location: Location) {
  }

  goBack() {
    this.location.back()
  }
}

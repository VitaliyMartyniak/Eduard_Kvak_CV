import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-car-iq-pay-project',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './car-iq-pay-project.component.html',
  styleUrl: './car-iq-pay-project.component.scss'
})
export class CarIqPayProjectComponent {
  hashes = ['Automotive', 'Financial services', 'FinTech', 'Fleet management', 'Payments'];

}

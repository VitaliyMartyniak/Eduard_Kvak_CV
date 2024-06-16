import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-simple-cards',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './simple-cards.component.html',
  styleUrl: './simple-cards.component.scss'
})
export class SimpleCardsComponent {
  @Input() cards: any[] = [];
}

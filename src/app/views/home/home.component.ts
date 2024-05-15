import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  // animations: [
  //   trigger('shrinkAnimation', [
  //     state('cornered', style({
  //       borderRadius: '0px',
  //     })),
  //     state('rounded', style({
  //       borderRadius: '10px'
  //     })),
  //     transition('cornered <=> rounded', [
  //       animate('1s ease-out')
  //     ]),
  //   ]),
  // ],
})
export class HomeComponent implements OnInit{
  borderState = 'cornered'

  constructor() {
  }

  ngOnInit() {
    this.borderState = 'rounded';
  }

}

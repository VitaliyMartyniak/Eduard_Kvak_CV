import {AfterViewInit, Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
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
        animate('1s ease-out')
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit, AfterViewInit{
  borderState = 'cornered'
  mainText = 'Hi, I\'m Ed, a seasoned product designer with over 6 years of experience. I craft innovative digital experiences that blend user needs with business goals. Let\'s collaborate to turn your vision into reality.';
  textArray: string[] = [];

  constructor() {
  }

  ngOnInit() {
    this.textArray = this.mainText.split('');
  }

  ngAfterViewInit() {
    this.borderState = 'rounded';
  }
}

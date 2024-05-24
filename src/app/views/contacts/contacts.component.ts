import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-contacts',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

  constructor(private location: Location) {
  }

  goBack() {
    this.location.back()
  }

}

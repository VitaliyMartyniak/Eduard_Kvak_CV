import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {Location} from "@angular/common";
import {NavigationComponent} from "../../components/navigation/navigation.component";

@Component({
  selector: 'app-contacts',
  standalone: true,
    imports: [
        RouterLink,
        NavigationComponent
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

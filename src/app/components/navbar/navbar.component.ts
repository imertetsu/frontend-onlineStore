import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  buttonActive:boolean = false;
  buttonClassInactive:string = "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium";
  buttonClassActive:string = "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium";
  isActive: number = 0;


  setActive(buttonId: number) {
    this.buttonClassInactive = "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium";
    this.isActive = buttonId;
  }
}


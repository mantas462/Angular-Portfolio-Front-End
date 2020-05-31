import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}

  openAbout() {
    this.router.navigate(['/about']);
  }

  openSkills() {
    this.router.navigate(['/skills']);
  }

  openExperience() {
    this.router.navigate(['/experience']);
  }

  openContact() {
    this.router.navigate(['/contact']);
  }
}

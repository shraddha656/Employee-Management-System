import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLinkActive, RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive,FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']


})
export class App {
  protected readonly title = signal('EMS-Frontend');
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent],
  template: `
    <div class="home-page">
      <app-hero></app-hero>
    </div>
  `,
  styles: [`
    .home-page {
      width: 100%;
    }
  `]
})
export class HomeComponent {}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { SeoService } from '../../services/seo.service';

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
export class HomeComponent implements OnInit {
  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Inicio',
      description: 'Zavalpa Comercializadora - Empresa 100% mexicana experta en comercio exterior, logística internacional, productos textiles, papelería, muebles de oficina y más.',
      keywords: 'zavalpa, comercializadora, comercio exterior, logística, importación, exportación, productos mexicanos, CDMX',
      canonicalUrl: '/'
    });
  }
}

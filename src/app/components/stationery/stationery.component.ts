import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-stationery',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './stationery.component.html',
  styleUrls: ['./stationery.component.css']
})
export class StationeryComponent implements OnInit {
  stationeryItems: any[] = [];
  private productService = inject(ProductService);
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Artículos de Papelería',
      description: 'Artículos de papelería para oficina y escuela. Encuentra todo lo que necesitas en suministros de papelería al mejor precio.',
      keywords: 'papelería, oficina, escuela, suministros, artículos escolares, zavalpa',
      canonicalUrl: '/productos/papeleria'
    });
    this.productService.getProductsByCategory('Papelería').subscribe(data => {
      this.stationeryItems = data;
    });
  }
}

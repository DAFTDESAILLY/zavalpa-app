import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-bags',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.css']
})
export class BagsComponent implements OnInit {
  bags: any[] = [];

  constructor(private productService: ProductService, private seo: SeoService) { }

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Bolsas y Carteras',
      description: 'Descubre nuestra colección de bolsas y carteras de alta calidad. Variedad de estilos y materiales para mayoreo.',
      keywords: 'bolsas, carteras, mayoreo, moda, accesorios, zavalpa',
      canonicalUrl: '/productos/bolsas-carteras'
    });
    this.productService.getProductsByCategory('Bolsas y Carteras').subscribe(data => {
      this.bags = data;
    });
  }
}
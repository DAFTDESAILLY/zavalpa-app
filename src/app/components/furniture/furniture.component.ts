import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-furniture',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {
  furnitureList: any[] = [];
  private productService = inject(ProductService);
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Muebles de Oficina',
      description: 'Muebles de oficina ergonómicos y funcionales. Escritorios, sillas, estantes y más para tu espacio de trabajo.',
      keywords: 'muebles oficina, escritorios, sillas, estantes, ergonómico, mobiliario, zavalpa',
      canonicalUrl: '/productos/muebles-oficina'
    });
    this.productService.getProductsByCategory('Muebles de Oficina').subscribe(data => {
      this.furnitureList = data;
    });
  }
}

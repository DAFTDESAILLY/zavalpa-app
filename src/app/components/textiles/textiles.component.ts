import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-textiles',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './textiles.component.html',
  styleUrls: ['./textiles.component.css']
})
export class TextilesComponent implements OnInit {
  categories: any[] = [];
  private productService = inject(ProductService);
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Textiles y Calzado',
      description: 'Catálogo de textiles y calzado de calidad. Productos para la industria textil, tapicería y calzado al mayoreo.',
      keywords: 'textiles, calzado, tapicería, tela, zapatos, mayoreo, zavalpa',
      canonicalUrl: '/productos/textiles-calzado'
    });
    this.productService.getProductsByCategory('Textiles').subscribe(data => {
      this.categories = data;
    });
  }
}

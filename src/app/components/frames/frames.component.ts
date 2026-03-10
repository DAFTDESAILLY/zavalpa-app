import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-frames',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './frames.component.html',
  styleUrls: ['./frames.component.css']
})
export class FramesComponent implements OnInit {
  frames: any[] = [];
  private productService = inject(ProductService);
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Armazones',
      description: 'Armazones de alta calidad para lentes. Variedad de estilos y materiales disponibles al mayoreo.',
      keywords: 'armazones, lentes, óptica, marcos, anteojos, mayoreo, zavalpa',
      canonicalUrl: '/productos/armazones'
    });
    this.productService.getProductsByCategory('Armazones').subscribe(data => {
      this.frames = data;
    });
  }
}

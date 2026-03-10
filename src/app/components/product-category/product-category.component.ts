import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { ProductService, Product } from '../../services/product.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-product-category',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="category-page">
      <div class="container">
        <div class="page-header">
          <h1 class="page-title">
            <span class="highlight">{{ title }}</span>
          </h1>
          <p class="page-description">Explora nuestra selección de productos.</p>
        </div>

        <div class="products-grid">
          @for (product of products; track product.id) {
          <div class="product-card">
            <div class="product-image-container">
              @if (product.images && product.images.length > 0) {
              <img [src]="product.images[0]" [alt]="product.name" class="product-img">
              }
            </div>

            <div class="product-body">
              <h3 class="product-title">{{ product.name }}</h3>

              <div class="product-rating">
                <span class="stars">★★★★★</span>
                <span class="rating-sep">·</span>
                <span class="rating-count">1,100</span>
              </div>

              <p class="product-desc">{{ product.description }}</p>

              @if (product.features && product.features.length > 0) {
              <div class="product-features-box">
                <h4 class="features-title">CARACTERÍSTICAS:</h4>
                <ul class="features-list">
                  @for (feature of product.features; track feature) {
                  <li>
                    <span class="check-icon">✓</span>
                    <span>· {{ feature }}</span>
                  </li>
                  }
                </ul>
              </div>
              }

              <div class="product-buttons">
                <a [routerLink]="['/producto', product.slug]" class="btn-ver-detalles">Ver Detalles</a>
                <a [routerLink]="['/contacto']" [queryParams]="{product: product.name}" class="btn-cotizar">Cotizar</a>
              </div>
            </div>
          </div>
          }
        </div>

        <div class="cta-section">
          <h2>¿Buscas algo específico?</h2>
          <p>Contáctanos para pedidos especiales y cotizaciones personalizadas.</p>
          <a routerLink="/contacto" class="btn btn-secondary btn-lg">Contactar Ventas</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .category-page { padding-top: 120px; padding-bottom: 4rem; min-height: 100vh; }
    .page-header { text-align: center; margin-bottom: 4rem; }
    .page-title { font-size: clamp(2.5rem, 5vw, 3.5rem); font-weight: 900; margin-bottom: 1rem; }
    .highlight { background: linear-gradient(135deg, var(--color-primary), var(--color-secondary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .page-description { font-size: var(--font-size-lg); color: var(--color-text-secondary); }

    .products-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 2rem; margin-bottom: 4rem; }
    @media (min-width: 768px) { .products-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 1024px) { .products-grid { grid-template-columns: repeat(3, 1fr); } }

    .product-card { background: var(--color-bg-card); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: var(--border-radius-lg); overflow: hidden; transition: all var(--transition-base); display: flex; flex-direction: column; }
    .product-card:hover { transform: translateY(-5px); border-color: var(--color-primary); box-shadow: 0 20px 40px rgba(19, 61, 101, 0.1); }

    .product-image-container { width: calc(100% - 3rem); max-width: 280px; height: 220px; margin: 1.5rem auto 0; display: flex; align-items: center; justify-content: center; border: 2px solid rgba(255, 255, 255, 0.1); border-radius: var(--border-radius-lg); overflow: hidden; background: rgba(19, 61, 101, 0.03); transition: all var(--transition-base); }
    .product-card:hover .product-image-container { border-color: var(--color-primary); }
    .product-img { width: 100%; height: 100%; object-fit: contain; padding: 1rem; transition: transform var(--transition-base); }
    .product-card:hover .product-img { transform: scale(1.05); }

    .product-body { padding: 1.5rem 2rem 2rem; text-align: center; display: flex; flex-direction: column; flex-grow: 1; }
    .product-title { font-size: var(--font-size-xl); font-weight: 800; color: var(--color-text-primary); margin-bottom: 0.5rem; }
    .product-rating { display: flex; align-items: center; justify-content: center; gap: 0.35rem; margin-bottom: 1rem; }
    .stars { color: #f5a623; font-size: 0.9rem; letter-spacing: 1px; }
    .rating-sep { color: var(--color-text-muted); }
    .rating-count { color: var(--color-primary); font-size: var(--font-size-sm); font-weight: 500; }
    .product-desc { color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 1.5rem; }

    .product-features-box { text-align: left; background: rgba(255, 255, 255, 0.03); padding: 1.25rem 1.5rem; border-radius: var(--border-radius-md); border: 1px solid rgba(255, 255, 255, 0.08); margin-bottom: 1.5rem; }
    .features-title { font-size: var(--font-size-sm); font-weight: 800; color: var(--color-text-primary); margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.5px; }
    .features-list { list-style: none; padding: 0; margin: 0; }
    .features-list li { display: flex; align-items: flex-start; gap: 0.5rem; padding: 0.35rem 0; font-size: var(--font-size-sm); color: var(--color-text-secondary); }
    .check-icon { color: var(--color-primary); font-weight: bold; flex-shrink: 0; }

    .product-buttons { display: flex; align-items: center; justify-content: center; gap: 1rem; margin-top: auto; }
    .btn-ver-detalles { padding: 0.6rem 1.5rem; font-size: var(--font-size-sm); font-weight: 600; color: var(--color-text-primary); text-decoration: none; background: transparent; cursor: pointer; transition: color var(--transition-base); }
    .btn-ver-detalles:hover { color: var(--color-primary); }
    .btn-cotizar { padding: 0.6rem 1.5rem; font-size: var(--font-size-sm); font-weight: 600; color: white; background: var(--color-primary); border-radius: var(--border-radius-md); text-decoration: none; cursor: pointer; transition: all var(--transition-base); }
    .btn-cotizar:hover { background: var(--color-primary-dark); transform: translateY(-2px); box-shadow: 0 5px 15px rgba(19, 61, 101, 0.3); }

    .cta-section { text-align: center; padding: 4rem 2rem; background: linear-gradient(135deg, rgba(19, 61, 101, 0.1), rgba(107, 108, 112, 0.1)); border-radius: var(--border-radius-lg); border: 1px solid rgba(255, 255, 255, 0.1); }
    .cta-section h2 { font-size: var(--font-size-3xl); font-weight: 800; margin-bottom: 1rem; }
    .cta-section p { font-size: var(--font-size-lg); color: var(--color-text-secondary); margin-bottom: 2rem; }
  `]
})
export class ProductCategoryComponent implements OnInit {
  products: Product[] = [];
  title = '';
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private seo = inject(SeoService);

  ngOnInit() {
    const data = this.route.snapshot.data;
    this.title = data['title'] || 'Productos';
    const category = data['category'] || '';

    this.seo.updateSeo({
      title: this.title,
      description: `Explora nuestra selección de productos de ${this.title}. Calidad y variedad al mejor precio.`,
      keywords: `${this.title.toLowerCase()}, productos, zavalpa, mayoreo`,
      canonicalUrl: `/productos/${category.toLowerCase().replace(/\s+/g, '-')}`
    });

    this.productService.getProductsByCategory(category).subscribe(products => {
      this.products = products;
    });
  }
}

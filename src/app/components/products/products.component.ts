import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../models';
import { ProductsService } from '../../services/products.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  selectedCategory: string = 'all';

  categories = [
    { id: 'all', name: 'Todos los Productos', icon: '📦' },
    { id: 'bolsas-carteras', name: 'Bolsas y Carteras', icon: '👜' },
    { id: 'papeleria', name: 'Artículos de Papelería', icon: '📝' },
    { id: 'salud-higiene', name: 'Salud e Higiene', icon: '🏥' },
    { id: 'armazones', name: 'Armazones', icon: '👓' },
    { id: 'muebles-oficina', name: 'Muebles para Oficina', icon: '🪑' },
    { id: 'hogar', name: 'Hogar', icon: '🏠' }
  ];

  constructor(private productsService: ProductsService, private seo: SeoService) { }

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Productos',
      description: 'Explora nuestro catálogo de productos: bolsas, carteras, papelería, textiles, calzado, armazones, muebles de oficina, hogar y salud e higiene.',
      keywords: 'productos zavalpa, bolsas, carteras, papelería, textiles, calzado, armazones, muebles oficina, hogar, salud, higiene',
      canonicalUrl: '/productos'
    });
    this.loadProducts();
  }

  loadProducts() {
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  get filteredProducts() {
    if (this.selectedCategory === 'all') {
      return this.products;
    }
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  selectCategory(categoryId: string) {
    this.selectedCategory = categoryId;
  }

  getCategoryName(categoryId: string): string {
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.name : categoryId;
  }

  getProductLink(product: Product): any[] | string {
    switch (product.category) {
      case 'bolsas-carteras':
        return '/productos/bolsas-carteras';
      case 'papeleria':
        return '/productos/papeleria';
      case 'textiles-calzado':
      case 'textiles-tapiceria':
        return '/productos/textiles-calzado';
      case 'armazones':
        return '/productos/armazones';
      case 'muebles-oficina':
        return '/productos/muebles-oficina';
      case 'hogar':
        return '/productos/hogar';
      case 'salud-higiene':
        return '/productos/salud-higiene';
      default:
        return ['/productos', product.id];
    }
  }
}

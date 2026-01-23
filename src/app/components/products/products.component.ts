import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../models';
import { ProductsService } from '../../services/products.service';

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
    { id: 'textiles-calzado', name: 'Textiles - Calzado', icon: '👟' },
    { id: 'textiles-tapiceria', name: 'Textiles - Tapicería', icon: '🛋️' },
    { id: 'armazones', name: 'Armazones', icon: '👓' },
    { id: 'muebles-oficina', name: 'Muebles para Oficina', icon: '🪑' }
  ];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
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
      default:
        return ['/productos', product.id];
    }
  }
}

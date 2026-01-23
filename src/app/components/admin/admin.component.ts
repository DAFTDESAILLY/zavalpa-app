import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ServicesService } from '../../services/services.service';
import { ProductsService } from '../../services/products.service';
import { Service, Product } from '../../models';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <section class="admin-page">
      <div class="container">
        <div class="admin-header">
          <h1>Panel de Administración</h1>
          <a routerLink="/" class="btn btn-secondary">Volver al Sitio</a>
        </div>

        <div class="admin-content">
          <!-- Tabs -->
          <div class="tabs">
            <button 
              class="tab-btn"
              [class.active]="activeTab === 'services'"
              (click)="activeTab = 'services'">
              Servicios
            </button>
            <button 
              class="tab-btn"
              [class.active]="activeTab === 'products'"
              (click)="activeTab = 'products'">
              Productos
            </button>
            <button 
              class="tab-btn"
              [class.active]="activeTab === 'stats'"
              (click)="activeTab = 'stats'">
              Estadísticas
            </button>
          </div>

          <!-- Services Management -->
          @if (activeTab === 'services') {
            <div class="tab-content">
              <h2>Gestión de Servicios</h2>
              <div class="items-grid">
                @for (service of services; track service.id) {
                  <div class="admin-card">
                    <div class="card-header">
                      <span class="card-icon">{{ service.icon }}</span>
                      <h3>{{ service.title }}</h3>
                    </div>
                    <p class="card-category">{{ service.category }}</p>
                    <p>{{ service.description }}</p>
                    <div class="card-actions">
                      <button class="btn-small btn-secondary">Editar</button>
                      <button 
                        class="btn-small"
                        [class.btn-danger]="service.isActive"
                        [class.btn-success]="!service.isActive"
                        (click)="toggleServiceStatus(service.id)">
                        {{ service.isActive ? 'Desactivar' : 'Activar' }}
                      </button>
                    </div>
                  </div>
                }
              </div>
            </div>
          }

          <!-- Products Management -->
          @if (activeTab === 'products') {
            <div class="tab-content">
              <h2>Gestión de Productos</h2>
              <div class="items-grid">
                @for (product of products; track product.id) {
                  <div class="admin-card">
                    <div class="card-header">
                      <h3>{{ product.name }}</h3>
                    </div>
                    <p class="card-category">{{ product.category }}</p>
                    <p>{{ product.description }}</p>
                    <div class="card-actions">
                      <button class="btn-small btn-secondary">Editar</button>
                      <button 
                        class="btn-small"
                        [class.btn-danger]="product.isActive"
                        [class.btn-success]="!product.isActive"
                        (click)="toggleProductStatus(product.id)">
                        {{ product.isActive ? 'Desactivar' : 'Activar' }}
                      </button>
                    </div>
                  </div>
                }
              </div>
            </div>
          }

          <!-- Stats -->
          @if (activeTab === 'stats') {
            <div class="tab-content">
              <h2>Estadísticas del Sistema</h2>
              <div class="stats-grid">
                <div class="stat-card">
                  <div class="stat-icon">📋</div>
                  <div class="stat-value">{{ services.length }}</div>
                  <div class="stat-label">Servicios Totales</div>
                </div>
                <div class="stat-card">
                  <div class="stat-icon">✅</div>
                  <div class="stat-value">{{ activeServicesCount }}</div>
                  <div class="stat-label">Servicios Activos</div>
                </div>
                <div class="stat-card">
                  <div class="stat-icon">📦</div>
                  <div class="stat-value">{{ products.length }}</div>
                  <div class="stat-label">Productos Totales</div>
                </div>
                <div class="stat-card">
                  <div class="stat-icon">✅</div>
                  <div class="stat-value">{{ activeProductsCount }}</div>
                  <div class="stat-label">Productos Activos</div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .admin-page {
      padding-top: 120px;
      padding-bottom: 4rem;
      min-height: 100vh;
    }

    .admin-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3rem;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .admin-header h1 {
      font-size: var(--font-size-3xl);
      background: linear-gradient(135deg, var(--color-accent), var(--color-primary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .tabs {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
      border-bottom: 2px solid rgba(255, 255, 255, 0.1);
      overflow-x: auto;
    }

    .tab-btn {
      padding: 1rem 2rem;
      background: transparent;
      border: none;
      color: var(--color-text-secondary);
      font-weight: 600;
      cursor: pointer;
      position: relative;
      transition: all var(--transition-base);
      white-space: nowrap;
    }

    .tab-btn:hover {
      color: var(--color-text-primary);
    }

    .tab-btn.active {
      color: var(--color-primary);
    }

    .tab-btn.active::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--color-primary);
    }

    .tab-content {
      animation: fadeIn 0.3s ease;
    }

    .tab-content h2 {
      font-size: var(--font-size-2xl);
      margin-bottom: 2rem;
    }

    .items-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 1.5rem;
    }

    @media (min-width: 768px) {
      .items-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .items-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .admin-card {
      background: var(--color-bg-card);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: var(--border-radius-md);
      padding: 1.5rem;
    }

    .card-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1rem;
    }

    .card-icon {
      font-size: 2rem;
    }

    .card-header h3 {
      font-size: var(--font-size-lg);
      margin: 0;
    }

    .card-category {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      background: rgba(19, 61, 101, 0.1);
      border-radius: var(--border-radius-sm);
      color: var(--color-primary);
      font-size: var(--font-size-xs);
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .admin-card p {
      color: var(--color-text-secondary);
      font-size: var(--font-size-sm);
      margin-bottom: 1rem;
    }

    .card-actions {
      display: flex;
      gap: 0.5rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .btn-small {
      padding: 0.5rem 1rem;
      font-size: var(--font-size-sm);
      border-radius: var(--border-radius-sm);
      border: none;
      font-weight: 600;
      cursor: pointer;
      transition: all var(--transition-base);
    }

    .btn-small.btn-secondary {
      background: rgba(255, 255, 255, 0.1);
      color: var(--color-text-primary);
    }

    .btn-small.btn-secondary:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    .btn-danger {
      background: rgba(239, 68, 68, 0.2);
      color: #ef4444;
    }

    .btn-danger:hover {
      background: rgba(239, 68, 68, 0.3);
    }

    .btn-success {
      background: rgba(19, 61, 101, 0.2);
      color: var(--color-primary);
    }

    .btn-success:hover {
      background: rgba(19, 61, 101, 0.3);
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
    }

    @media (min-width: 640px) {
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .stats-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    .stat-card {
      background: var(--color-bg-card);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: var(--border-radius-lg);
      padding: 2rem;
      text-align: center;
    }

    .stat-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .stat-value {
      font-size: var(--font-size-4xl);
      font-weight: 800;
      color: var(--color-primary);
      margin-bottom: 0.5rem;
    }

    .stat-label {
      color: var(--color-text-secondary);
      font-size: var(--font-size-sm);
    }
  `]
})
export class AdminComponent implements OnInit {
  activeTab: 'services' | 'products' | 'stats' = 'services';
  services: Service[] = [];
  products: Product[] = [];

  constructor(
    public authService: AuthService,
    private servicesService: ServicesService,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.servicesService.getAllServices().subscribe(services => {
      this.services = services;
    });

    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  get activeServicesCount() {
    return this.services.filter(s => s.isActive).length;
  }

  get activeProductsCount() {
    return this.products.filter(p => p.isActive).length;
  }

  toggleServiceStatus(id: string) {
    const service = this.services.find(s => s.id === id);
    if (service) {
      this.servicesService.updateService(id, { isActive: !service.isActive }).subscribe(() => {
        this.loadData();
      });
    }
  }

  toggleProductStatus(id: string) {
    const product = this.products.find(p => p.id === id);
    if (product) {
      this.productsService.updateProduct(id, { isActive: !product.isActive }).subscribe(() => {
        this.loadData();
      });
    }
  }
}

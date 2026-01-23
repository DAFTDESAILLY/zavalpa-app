import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Inicio - Zavalpa Comercializadora'
  },
  {
    path: 'servicios',
    component: ServicesComponent,
    title: 'Servicios - Zavalpa Comercializadora'
  },
  {
    path: 'productos',
    component: ProductsComponent,
    title: 'Productos - Zavalpa Comercializadora'
  },
  {
    path: 'productos/bolsas-carteras',
    loadComponent: () => import('./components/bags/bags.component').then(m => m.BagsComponent),
    title: 'Bolsas y Carteras - Zavalpa Comercializadora'
  },
  {
    path: 'productos/papeleria',
    loadComponent: () => import('./components/stationery/stationery.component').then(m => m.StationeryComponent),
    title: 'Artículos de Papelería - Zavalpa Comercializadora'
  },
  {
    path: 'productos/textiles-calzado',
    loadComponent: () => import('./components/textiles/textiles.component').then(m => m.TextilesComponent),
    title: 'Textiles y Calzado - Zavalpa Comercializadora'
  },
  {
    path: 'productos/armazones',
    loadComponent: () => import('./components/frames/frames.component').then(m => m.FramesComponent),
    title: 'Armazones - Zavalpa Comercializadora'
  },
  {
    path: 'productos/muebles-oficina',
    loadComponent: () => import('./components/furniture/furniture.component').then(m => m.FurnitureComponent),
    title: 'Muebles de Oficina - Zavalpa Comercializadora'
  },
  {
    path: 'producto/:slug',
    loadComponent: () => import('./components/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
  },
  {
    path: 'nosotros',
    component: AboutComponent,
    title: 'Nosotros - Zavalpa Comercializadora'
  },
  {
    path: 'contacto',
    component: ContactComponent,
    title: 'Contacto - Zavalpa Comercializadora'
  },
  {
    path: 'admin',
    loadComponent: () => import('./components/admin/admin.component').then(m => m.AdminComponent),
    title: 'Administración - Zavalpa'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

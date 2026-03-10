import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    // Bolsas y Carteras de Mano
    {
      id: '1',
      category: 'bolsas-carteras',
      name: 'Bolsas y Carteras de Mano',
      description: 'Tenemos las bolsas y carteras que estás buscando. Descubre nuestra selección de bolsas y carteras. Encuentra las mejores bolsas y carteras en nuestra colección.',
      imageUrl: 'assets/products/bolsa/bolsas-mano.webp',
      specifications: [
        'Amplia variedad de estilos',
        'Materiales de alta calidad',
        'Diseños modernos y clásicos',
        'Para dama y caballero'
      ],
      isActive: true
    },
    // Artículos de Papelería
    {
      id: '2',
      category: 'papeleria',
      name: 'Artículos de Papelería',
      description: 'Lápices, bolígrafos y artículos de escritura. Papel, tarjetas, blocs, libros e impresos. Sobres y bolsas. Material de correo y embalaje. Carpetas, archivadores. Pegamentos y cintas adhesivas.',
      imageUrl: 'assets/products/papeleria/articulos-de-escritura.webp',
      specifications: [
        'Lápices, bolígrafos y artículos de escritura',
        'Lápices con mina de grafito, lápices de colores y pinturas',
        'Papel, tarjetas, blocs, libros e impresos',
        'Sobres y bolsas',
        'Material de correo y embalaje',
        'Carpetas, cubiertas de informes e índices',
        'Carpetas, archivadores',
        'Pegamentos y cintas adhesivas'
      ],
      isActive: true
    },
    // Textiles - Calzado
    {
      id: '3',
      category: 'textiles-calzado',
      name: 'Productos Textiles para Calzado',
      description: 'Tenemos una gran variedad de productos textiles para cubrir cada área del mercado. Contamos con productos de corte y forro para dama y caballero.',
      specifications: [
        'Productos de corte y forro para dama',
        'Productos de corte y forro para caballero',
        'Material especializado para calzado',
        'Gran variedad de texturas y colores'
      ],
      isActive: true
    },
    // Textiles - Tapicería
    {
      id: '4',
      category: 'textiles-tapiceria',
      name: 'Productos Textiles para Tapicería',
      description: 'Contamos con gran variedad de cheniles, suedes, lonas, sintéticos, viniles, material para exteriores, terciopelos y jaquards.',
      specifications: [
        'Cheniles',
        'Suedes',
        'Lonas',
        'Sintéticos',
        'Viniles',
        'Material para exteriores',
        'Terciopelos',
        'Jaquards',
        'Personalización con grabados',
        'Variedad de colores y recubrimientos'
      ],
      isActive: true
    },
    // Armazones
    {
      id: '5',
      category: 'armazones',
      name: 'Armazones',
      description: 'Tenemos armazones ópticos y de sol en diferentes estilos.',
      imageUrl: 'assets/products/armazones/armazon-optico.webp',
      specifications: [
        'Armazones ópticos',
        'Armazones de sol',
        'Diferentes estilos disponibles',
        'Alta calidad y durabilidad'
      ],
      isActive: true
    },
    // Muebles para Oficina
    {
      id: '6',
      category: 'muebles-oficina',
      name: 'Muebles para Oficina, Biblioteca y Archivos',
      description: 'Amplia gama de muebles para oficina, biblioteca y archivos con la más alta calidad.',
      imageUrl: 'assets/products/muebles/Escritorios.webp',
      specifications: [
        'Escritorios',
        'Sillas',
        'Lockers',
        'Archiveros',
        'Cajas Fuerte',
        'Bancos móviles',
        'Módulos',
        'Gabinetes',
        'Sala de recepción',
        'Libreros',
        'Ficheros',
        'Mesas de junta'
      ],
      isActive: true
    },
    // Hogar
    {
      id: '7',
      category: 'hogar',
      name: 'Productos para el Hogar',
      description: 'Soluciones prácticas y tecnología para tu vida diaria. Encendedores, pilas y más.',
      imageUrl: 'assets/products/hogar/encendedor.webp',
      specifications: [
        'Encendedores',
        'Pilas de larga duración',
        'Accesorios varios para el hogar'
      ],
      isActive: true
    },
    // Salud e Higiene
    {
      id: '8',
      category: 'salud-higiene',
      name: 'Salud e Higiene',
      description: 'Productos especializados para el cuidado de la salud y la higiene personal.',
      imageUrl: 'assets/products/salud/cotonetes.webp',
      specifications: [
        'Cortaúñas',
        'Cotonetes',
        'Pasadores y accesorios para el cabello'
      ],
      isActive: true
    }
  ];

  getAllProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    const filtered = this.products.filter(p => p.category === category && p.isActive);
    return of(filtered);
  }

  getProductById(id: string): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }

  createProduct(product: Product): Observable<Product> {
    this.products.push(product);
    return of(product);
  }

  updateProduct(id: string, product: Partial<Product>): Observable<Product | undefined> {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...product };
      return of(this.products[index]);
    }
    return of(undefined);
  }

  deleteProduct(id: string): Observable<boolean> {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}

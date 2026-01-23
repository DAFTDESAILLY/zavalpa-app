import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
    id: string;
    slug: string;
    name: string;
    description: string;
    category: string;
    subcategory?: string;
    features?: string[];
    images: string[]; // Can be paths to images or emojis
    icon?: string; // Fallback icon/emoji
    dimensions?: string;
}

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private products: Product[] = [
        // BAGS
        {
            id: 'coleccion-bolsas-mano',
            slug: 'coleccion-bolsas-mano',
            name: 'Colección Bolsas de Mano',
            description: 'Elegantes bolsas de mano disponibles en una variedad de colores metálicos y mate. Diseño moderno con amplio espacio y correa ajustable.',
            category: 'Bolsas y Carteras',
            features: ['Colores: Rosa, Dorado, Café, Gris, Negro', 'Acabados metálicos y mate', 'Diseño estructurado'],
            images: ['assets/products/BOLSA-ROSA.png'], // Placeholder
            icon: '👜'
        },
        {
            id: 'cartera-14-negro',
            slug: 'cartera-14-negro',
            name: 'Cartera 14 Negro',
            description: 'Cartera elegante en color negro con hebilla frontal distintiva. Ideal para ocasiones formales.',
            category: 'Bolsas y Carteras',
            features: ['Color: Negro', 'Hebilla decorativa', 'Textura suave'],
            dimensions: '19x25.5cm',
            images: ['assets/products/BOLSA-NEGRO.png'],
            icon: '👛'
        },
        {
            id: 'cartera-14-beige',
            slug: 'cartera-14-beige',
            name: 'Cartera 14 Beige',
            description: 'Cartera versátil en tono beige, perfecta para combinar con cualquier atuendo.',
            category: 'Bolsas y Carteras',
            features: ['Color: Beige', 'Diseño clásico', 'Fácil de combinar'],
            dimensions: '19x25.5cm',
            images: ['assets/products/BOLSA-HUESO.png'],
            icon: '👛'
        },
        {
            id: 'cartera-13-rojo',
            slug: 'cartera-13-rojo',
            name: 'Cartera 13 Rojo',
            description: 'Cartera vibrante en color rojo con textura capitonada para un look audaz.',
            category: 'Bolsas y Carteras',
            features: ['Color: Rojo', 'Textura capitonada', 'Cierre seguro'],
            dimensions: '19x25.5cm',
            images: ['assets/products/BOLSA-ROJA.png'],
            icon: '👛'
        },
        {
            id: 'cartera-13-lila',
            slug: 'cartera-13-lila',
            name: 'Cartera 13 Lila',
            description: 'Cartera delicada en color lila, aportando un toque de color suave y femenino.',
            category: 'Bolsas y Carteras',
            features: ['Color: Lila', 'Diseño moderno', 'Ligera y práctica'],
            dimensions: '19x25.5cm',
            images: ['assets/products/BOLSA-LILA.PNG'], // Note: check extension case if needed
            icon: '👛'
        },

        // STATIONERY
        {
            id: 'articulos-escritura',
            slug: 'articulos-escritura',
            name: 'Artículos de Escritura',
            description: 'Lápices, bolígrafos y artículos de escritura de alta calidad para oficina y escolar.',
            category: 'Papelería',
            images: [],
            icon: '✏️'
        },
        {
            id: 'lapices-pinturas',
            slug: 'lapices-pinturas',
            name: 'Lápices y Pinturas',
            description: 'Lápices con mina de grafito, lápices de colores y pinturas para uso artístico y técnico.',
            category: 'Papelería',
            images: [],
            icon: '🎨'
        },
        {
            id: 'papel-impresos',
            slug: 'papel-impresos',
            name: 'Papel e Impresos',
            description: 'Papel bond, tarjetas, blocs, libros e impresos diversos.',
            category: 'Papelería',
            images: [],
            icon: '📄'
        },
        {
            id: 'sobres-bolsas',
            slug: 'sobres-bolsas',
            name: 'Sobres y Bolsas',
            description: 'Variedad de sobres y bolsas para correspondencia y empaque.',
            category: 'Papelería',
            images: [],
            icon: '✉️'
        },
        {
            id: 'correo-embalaje',
            slug: 'correo-embalaje',
            name: 'Correo y Embalaje',
            description: 'Material especializado para correo y embalaje seguro.',
            category: 'Papelería',
            images: [],
            icon: '📦'
        },
        {
            id: 'carpetas-informes',
            slug: 'carpetas-informes',
            name: 'Carpetas e Informes',
            description: 'Carpetas, cubiertas de informes e índices para organización profesional.',
            category: 'Papelería',
            images: [],
            icon: '📂'
        },
        {
            id: 'archivadores',
            slug: 'archivadores',
            name: 'Archivadores',
            description: 'Sistemas de archivo y carpetas para gestión documental.',
            category: 'Papelería',
            images: [],
            icon: '🗄️'
        },
        {
            id: 'adhesivos',
            slug: 'adhesivos',
            name: 'Adhesivos',
            description: 'Pegamentos, colas y cintas adhesivas de uso general e industrial.',
            category: 'Papelería',
            images: [],
            icon: '📎'
        },

        // TEXTILES
        {
            id: 'textiles-calzado',
            slug: 'textiles-calzado',
            name: 'Textiles para Calzado',
            description: 'Contamos con productos de corte y forro para dama y caballero. Todo nuestro material especializado para la industria del calzado.',
            category: 'Textiles',
            subcategory: 'Calzado',
            features: ['Corte y forro', 'Materiales sintéticos y piel', 'Variedad de texturas'],
            images: [],
            icon: '👞'
        },
        {
            id: 'textiles-tapiceria',
            slug: 'textiles-tapiceria',
            name: 'Textiles para Tapicería',
            description: 'Gran variedad de chenilles, suedes, lonas, sintéticos, viniles, material para exteriores, terciopelos y jacquards.',
            category: 'Textiles',
            subcategory: 'Tapicería',
            features: ['Personalización de grabados', 'Diferentes colores', 'Recubrimientos especiales'],
            images: [],
            icon: '🛋️'
        },

        // FRAMES
        {
            id: 'armazon-abf01',
            slug: 'armazon-abf01',
            name: 'Armazón ABF01',
            description: 'Armazón óptico de diseño clásico con acabados premium.',
            category: 'Armazones',
            subcategory: 'Óptico',
            images: [],
            icon: '👓'
        },
        {
            id: 'armazon-auf01',
            slug: 'armazon-auf01',
            name: 'Lentes de Sol AUF01',
            description: 'Lentes de sol con protección UV y diseño moderno.',
            category: 'Armazones',
            subcategory: 'Solar',
            images: [],
            icon: '🕶️'
        },
        {
            id: 'armazon-aun01',
            slug: 'armazon-aun01',
            name: 'Armazón AUN01',
            description: 'Armazón ligero y resistente para uso diario.',
            category: 'Armazones',
            subcategory: 'Óptico',
            images: [],
            icon: '👓'
        },
        {
            id: 'armazon-mtv01',
            slug: 'armazon-mtv01',
            name: 'Lentes Deportivos MTV-01',
            description: 'Diseño deportivo ergonómico para máxima comodidad.',
            category: 'Armazones',
            subcategory: 'Deportivo',
            images: [],
            icon: '😎'
        }
    ];

    // Furniture items generated dynamically or hardcoded
    private furnitureItems: Product[] = [
        'Escritorios', 'Sillas', 'Lockers', 'Archiveros',
        'Cajas Fuerte', 'Bancos móviles', 'Módulos', 'Gabinetes',
        'Sala de recepción', 'Libreros', 'Ficheros', 'Mesas de junta'
    ].map(name => ({
        id: name.toLowerCase().replace(/ /g, '-'),
        slug: name.toLowerCase().replace(/ /g, '-'),
        name: name,
        description: `Mobiliario de oficina de alta calidad: ${name}. Diseño ergonómico y duradero.`,
        category: 'Muebles de Oficina',
        images: [],
        icon: '🪑'
    }));

    constructor() {
        this.products = [...this.products, ...this.furnitureItems];
    }

    getProducts(): Observable<Product[]> {
        return of(this.products);
    }

    getProductsByCategory(category: string): Observable<Product[]> {
        return of(this.products.filter(p => p.category === category));
    }

    getProductBySlug(slug: string): Observable<Product | undefined> {
        return of(this.products.find(p => p.slug === slug));
    }
}

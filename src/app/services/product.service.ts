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
        // BOLSAS Y CARTERAS
        {
            id: 'coleccion-bolsas-mano',
            slug: 'coleccion-bolsas-mano',
            name: 'Colección Bolsas de Mano',
            description: 'Elegantes bolsas de mano disponibles en una variedad de colores metálicos y mate. Diseño moderno con amplio espacio y correa ajustable.',
            category: 'Bolsas y Carteras',
            features: ['Colores: Rosa, Dorado, Café, Gris, Negro', 'Acabados metálicos y mate', 'Diseño estructurado'],
            images: ['assets/products/bolsa/bolsas-mano.webp'],
            icon: '👜'
        },
        {
            id: 'cartera-negro',
            slug: 'cartera-negro',
            name: 'Cartera Negro',
            description: 'Cartera elegante en color negro con hebilla frontal distintiva. Ideal para ocasiones formales.',
            category: 'Bolsas y Carteras',
            features: ['Color: Negro', 'Hebilla decorativa', 'Textura suave'],
            images: ['assets/products/bolsa/cartera-negra.webp'],
            icon: '👛'
        },
        {
            id: 'cartera-beige',
            slug: 'cartera-beige',
            name: 'Cartera Beige',
            description: 'Cartera versátil en tono beige, perfecta para combinar con cualquier atuendo.',
            category: 'Bolsas y Carteras',
            features: ['Color: Beige', 'Diseño clásico', 'Fácil de combinar'],
            images: ['assets/products/bolsa/cartera-beige.webp'],
            icon: '👛'
        },
        {
            id: 'cartera-rojo',
            slug: 'cartera-rojo',
            name: 'Cartera Rojo',
            description: 'Cartera vibrante en color rojo con textura capitonada para un look audaz.',
            category: 'Bolsas y Carteras',
            features: ['Color: Rojo', 'Textura capitonada', 'Cierre seguro'],
            images: ['assets/products/bolsa/cartera-rojo.webp'],
            icon: '👛'
        },
        {
            id: 'cartera-lila',
            slug: 'cartera-lila',
            name: 'Cartera Lila',
            description: 'Cartera delicada en color lila, aportando un toque de color suave y femenino.',
            category: 'Bolsas y Carteras',
            features: ['Color: Lila', 'Diseño moderno', 'Ligera y práctica'],
            images: ['assets/products/bolsa/cartera-lila-1.webp'],
            icon: '👛'
        },

        // PAPELERÍA
        {
            id: 'articulos-escritura',
            slug: 'articulos-escritura',
            name: 'Artículos de Escritura',
            description: 'Lápices, bolígrafos y artículos de escritura de alta calidad para oficina y escolar.',
            category: 'Papelería',
            images: ['assets/products/papeleria/articulos-de-escritura.webp'],
            icon: '✏️'
        },
        {
            id: 'lapices-pinturas',
            slug: 'lapices-pinturas',
            name: 'Lápices y Pinturas',
            description: 'Lápices con mina de grafito, lápices de colores y pinturas para uso artístico y técnico.',
            category: 'Papelería',
            images: ['assets/products/papeleria/lapices-y-pinturas.webp'],
            icon: '🎨'
        },
        {
            id: 'papel-impresos',
            slug: 'papel-impresos',
            name: 'Papel e Impresos',
            description: 'Papel bond, tarjetas, blocs, libros e impresos diversos.',
            category: 'Papelería',
            images: ['assets/products/papeleria/pape-e-impresos.webp'],
            icon: '📄'
        },
        {
            id: 'sobres-bolsas',
            slug: 'sobres-bolsas',
            name: 'Sobres y Bolsas',
            description: 'Variedad de sobres y bolsas para correspondencia y empaque.',
            category: 'Papelería',
            images: ['assets/products/papeleria/sobres-y-bolsas.webp'],
            icon: '✉️'
        },
        {
            id: 'correo-embalaje',
            slug: 'correo-embalaje',
            name: 'Correo y Embalaje',
            description: 'Material especializado para correo y embalaje seguro.',
            category: 'Papelería',
            images: ['assets/products/papeleria/correo-y-embalaje.webp'],
            icon: '📦'
        },
        {
            id: 'carpetas-informes',
            slug: 'carpetas-informes',
            name: 'Carpetas e Informes',
            description: 'Carpetas, cubiertas de informes e índices para organización profesional.',
            category: 'Papelería',
            images: ['assets/products/papeleria/carpetas-e-informes.webp'],
            icon: '📂'
        },
        {
            id: 'archivadores',
            slug: 'archivadores',
            name: 'Archivadores',
            description: 'Sistemas de archivo y carpetas para gestión documental.',
            category: 'Papelería',
            images: ['assets/products/papeleria/Archivadores.webp'],
            icon: '🗄️'
        },
        {
            id: 'adhesivos',
            slug: 'adhesivos',
            name: 'Adhesivos',
            description: 'Pegamentos, colas y cintas adhesivas de uso general e industrial.',
            category: 'Papelería',
            images: ['assets/products/papeleria/Adhesivos.webp'],
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

        // ARMAZONES
        {
            id: 'armazon-optico',
            slug: 'armazon-optico',
            name: 'Armazón Óptico',
            description: 'Armazón óptico de diseño clásico con acabados premium.',
            category: 'Armazones',
            subcategory: 'Óptico',
            images: ['assets/products/armazones/armazon-optico.webp'],
            icon: '👓'
        },
        {
            id: 'lentes-de-sol',
            slug: 'lentes-de-sol',
            name: 'Lentes de Sol',
            description: 'Lentes de sol con protección UV y diseño moderno.',
            category: 'Armazones',
            subcategory: 'Solar',
            images: ['assets/products/armazones/lentes-de-sol.webp'],
            icon: '🕶️'
        },
        {
            id: 'armazon-ligero',
            slug: 'armazon-ligero',
            name: 'Armazón Ligero',
            description: 'Armazón ligero y resistente para uso diario.',
            category: 'Armazones',
            subcategory: 'Óptico',
            images: ['assets/products/armazones/armazon-ligero.webp'],
            icon: '👓'
        },
        {
            id: 'lentes-deportivos',
            slug: 'lentes-deportivos',
            name: 'Lentes Deportivos',
            description: 'Diseño deportivo ergonómico para máxima comodidad.',
            category: 'Armazones',
            subcategory: 'Deportivo',
            images: ['assets/products/armazones/deportivo.webp'],
            icon: '😎'
        },

        // HOGAR
        {
            id: 'encendedores',
            slug: 'encendedores',
            name: 'Encendedores',
            description: 'Encendedores de alta calidad para uso doméstico.',
            category: 'Hogar',
            images: ['assets/products/hogar/encendedor.webp'],
            icon: '🔥'
        },
        {
            id: 'encendedores-coleccion',
            slug: 'encendedores-coleccion',
            name: 'Colección Encendedores',
            description: 'Variedad de encendedores con diseños exclusivos y acabados premium.',
            category: 'Hogar',
            images: ['assets/products/hogar/encendedor-1.webp'],
            icon: '🔥'
        },
        {
            id: 'pilas',
            slug: 'pilas',
            name: 'Pilas',
            description: 'Pilas de larga duración para todos tus dispositivos electrónicos.',
            category: 'Hogar',
            images: ['assets/products/hogar/pila.webp'],
            icon: '🔋'
        },

        // SALUD E HIGIENE
        {
            id: 'cortaunas',
            slug: 'cortaunas',
            name: 'Cortaúñas',
            description: 'Cortaúñas de acero inoxidable de alta precisión para el cuidado personal.',
            category: 'Salud e Higiene',
            images: ['assets/products/salud/cortauñas.webp'],
            icon: '💅'
        },
        {
            id: 'cotonetes',
            slug: 'cotonetes',
            name: 'Cotonetes',
            description: 'Cotonetes de algodón suave para higiene personal y uso médico.',
            category: 'Salud e Higiene',
            images: ['assets/products/salud/cotonetes.webp'],
            icon: '🏥'
        },
        {
            id: 'pasadores',
            slug: 'pasadores',
            name: 'Pasadores',
            description: 'Pasadores y accesorios para el cabello de uso diario.',
            category: 'Salud e Higiene',
            images: ['assets/products/salud/pasadores.webp'],
            icon: '💇'
        }
    ];

    // Furniture items with real images
    private furnitureItems: Product[] = [
        { name: 'Escritorios', image: 'assets/products/muebles/Escritorios.webp' },
        { name: 'Sillas', image: 'assets/products/muebles/Sillas.webp' },
        { name: 'Lockers', image: 'assets/products/muebles/Lockers.webp' },
        { name: 'Archiveros', image: 'assets/products/muebles/Archiveros.webp' },
        { name: 'Cajas Fuerte', image: 'assets/products/muebles/Cajas Fuerte.webp' },
        { name: 'Bancos Móviles', image: 'assets/products/muebles/Bancos móviles.webp' },
        { name: 'Módulos', image: 'assets/products/muebles/modulos.webp' },
        { name: 'Gabinetes', image: 'assets/products/muebles/Gabinetes.webp' },
        { name: 'Sala de Recepción', image: 'assets/products/muebles/Sala de recepción.webp' },
        { name: 'Libreros', image: 'assets/products/muebles/libreros.webp' },
        { name: 'Ficheros', image: 'assets/products/muebles/Ficheros.webp' },
        { name: 'Mesas de Junta', image: 'assets/products/muebles/Mesas de junta.webp' }
    ].map(item => ({
        id: item.name.toLowerCase().replace(/ /g, '-'),
        slug: item.name.toLowerCase().replace(/ /g, '-'),
        name: item.name,
        description: `Mobiliario de oficina de alta calidad: ${item.name}. Diseño ergonómico y duradero.`,
        category: 'Muebles de Oficina',
        images: [item.image],
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

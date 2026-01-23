import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Service } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private services: Service[] = [
    // Comercio Exterior
    {
      id: '1',
      category: 'comercio-exterior',
      title: 'Gestión y Asesoría Aduanera',
      description: 'Servicios integrales de asesoría aduanera, clasificación arancelaria y gestión de trámites de importación y exportación.',
      icon: '📋',
      features: [
        'Clasificación arancelaria precisa',
        'Gestión completa de documentación',
        'Asesoría en regulaciones aduaneras',
        'Optimización de procesos de despacho'
      ],
      isActive: true
    },
    {
      id: '2',
      category: 'comercio-exterior',
      title: 'Despacho Aduanal',
      description: 'Gestión completa de despacho aduanero para importaciones y exportaciones con los más altos estándares de eficiencia.',
      icon: '🛃',
      features: [
        'Despacho de importación',
        'Despacho de exportación',
        'Seguimiento en tiempo real',
        'Cumplimiento normativo garantizado'
      ],
      isActive: true
    },
    // Logística Internacional
    {
      id: '3',
      category: 'logistica',
      title: 'Transporte Multimodal',
      description: 'Soluciones de transporte marítimo, aéreo y terrestre adaptadas a sus necesidades específicas.',
      icon: '🚢',
      features: [
        'Transporte marítimo',
        'Transporte aéreo',
        'Transporte terrestre',
        'Consolidación de carga'
      ],
      isActive: true
    },
    {
      id: '4',
      category: 'logistica',
      title: 'Gestión de Fletes',
      description: 'Administración integral de fletes internacionales con las mejores tarifas y rutas optimizadas.',
      icon: '📦',
      features: [
        'Cotización competitiva',
        'Negociación con navieras',
        'Trazabilidad completa',
        'Optimización de rutas'
      ],
      isActive: true
    },
    // Consultoría
    {
      id: '5',
      category: 'consultoria',
      title: 'Estudios de Mercado',
      description: 'Análisis profundo de mercados internacionales para identificar oportunidades de negocio.',
      icon: '📊',
      features: [
        'Investigación de mercados objetivo',
        'Análisis de competencia',
        'Identificación de tendencias',
        'Informes detallados'
      ],
      isActive: true
    },
    {
      id: '6',
      category: 'consultoria',
      title: 'Inteligencia Comercial',
      description: 'Información estratégica para la toma de decisiones en comercio internacional.',
      icon: '💼',
      features: [
        'Búsqueda de proveedores',
        'Búsqueda de compradores',
        'Análisis de precios internacionales',
        'Validación de socios comerciales'
      ],
      isActive: true
    },
    // Servicios Técnicos
    {
      id: '7',
      category: 'servicios-tecnicos',
      title: 'Instalación de Maquinaria',
      description: 'Servicios especializados de instalación y puesta en marcha de maquinaria industrial.',
      icon: '🔧',
      features: [
        'Instalación profesional',
        'Puesta en marcha',
        'Pruebas técnicas',
        'Capacitación operativa'
      ],
      isActive: true
    },
    {
      id: '8',
      category: 'servicios-tecnicos',
      title: 'Verificación y Ajustes',
      description: 'Servicios de verificación técnica y ajustes especializados para optimizar el rendimiento.',
      icon: '⚙️',
      features: [
        'Verificación de funcionamiento',
        'Ajustes técnicos',
        'Calibración de equipos',
        'Mantenimiento preventivo'
      ],
      isActive: true
    }
  ];

  getAllServices(): Observable<Service[]> {
    return of(this.services);
  }

  getServicesByCategory(category: string): Observable<Service[]> {
    const filtered = this.services.filter(s => s.category === category && s.isActive);
    return of(filtered);
  }

  getServiceById(id: string): Observable<Service | undefined> {
    const service = this.services.find(s => s.id === id);
    return of(service);
  }

  createService(service: Service): Observable<Service> {
    this.services.push(service);
    return of(service);
  }

  updateService(id: string, service: Partial<Service>): Observable<Service | undefined> {
    const index = this.services.findIndex(s => s.id === id);
    if (index !== -1) {
      this.services[index] = { ...this.services[index], ...service };
      return of(this.services[index]);
    }
    return of(undefined);
  }

  deleteService(id: string): Observable<boolean> {
    const index = this.services.findIndex(s => s.id === id);
    if (index !== -1) {
      this.services.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}

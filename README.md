# Zavalpa Comercializadora - Aplicación Web

Aplicación web SPA moderna desarrollada con Angular 17+ para Zavalpa Comercializadora / Valcur, empresa especializada en comercio exterior, logística internacional y comercialización de productos.

## 🚀 Características

- **SPA Moderna**: Aplicación de página única con Angular standalone components
- **Diseño Responsivo**: Mobile-first, adaptable a todos los dispositivos
- **Gestión de Servicios**: Comercio exterior, logística, consultoría y servicios técnicos
- **Catálogo de Productos**: Textiles y refacciones automotrices
- **Panel Administrativo**: Gestión de contenidos con roles de usuario
- **UI/UX Profesional**: Diseño elegante inspirado en las mejores prácticas

## 📋 Requerimientos

- Node.js 18.x o superior
- npm 9.x o superior
- Angular CLI 17.x

## 🔧 Instalación

1. Instalar Angular CLI globalmente (si no lo tienes):
```bash
npm install -g @angular/cli
```

2. Instalar dependencias del proyecto:
```bash
npm install
```

## 💻 Desarrollo

Ejecutar servidor de desarrollo:
```bash
ng serve
```

Navegar a `http://localhost:4200/`

La aplicación se recargará automáticamente al realizar cambios en los archivos fuente.

## 🏗️ Construcción

Construir el proyecto para producción:
```bash
ng build
```

Los archivos de construcción se generarán en el directorio `dist/`.

## 📁 Estructura del Proyecto

```
zavalpa-app/
├── src/
│   ├── app/
│   │   ├── components/          # Componentes de la aplicación
│   │   │   ├── header/          # Navegación principal
│   │   │   ├── hero/            # Sección hero de inicio
│   │   │   ├── services/        # Página de servicios
│   │   │   ├── products/        # Página de productos
│   │   │   ├── about/           # Página sobre nosotros
│   │   │   ├── contact/         # Página de contacto
│   │   │   ├── footer/          # Pie de página
│   │   │   ├── home/            # Página de inicio
│   │   │   └── admin/           # Panel administrativo
│   │   ├── services/            # Servicios de datos
│   │   ├── models/              # Modelos de datos TypeScript
│   │   ├── app.component.ts     # Componente raíz
│   │   ├── app.config.ts        # Configuración de la app
│   │   └── app.routes.ts        # Rutas de navegación
│   ├── assets/                  # Recursos estáticos
│   ├── styles.css               # Estilos globales
│   ├── index.html               # HTML principal
│   └── main.ts                  # Punto de entrada
├── package.json
├── angular.json
├── tsconfig.json
└── README.md
```

## 🎯 Módulos Principales

### 1. Módulo Institucional
- Información de la empresa
- Misión y visión
- Valores corporativos

### 2. Módulo de Servicios
- **Comercio Exterior**: Gestión aduanera, clasificación arancelaria
- **Logística Internacional**: Transporte multimodal, gestión de fletes
- **Consultoría**: Estudios de mercado, inteligencia comercial
- **Servicios Técnicos**: Instalación de maquinaria, verificación

### 3. Módulo de Productos
- **Textiles**: Telas para confección, tapicería, materiales especializados
- **Refacciones Automotrices**: Motor, enfriamiento, frenos

### 4. Módulo de Administración
- Gestión de servicios
- Gestión de productos
- Estadísticas del sistema
- Control de visibilidad de contenidos

## 🔐 Roles de Usuario

- **Administrador**: Control total del contenido
- **Usuario Interno**: Consulta y apoyo comercial/operativo
- **Usuario Externo**: Consulta pública sin autenticación

## 🎨 Tecnologías Utilizadas

- **Angular 17+**: Framework principal
- **TypeScript**: Lenguaje de programación
- **RxJS**: Programación reactiva
- **CSS Variables**: Sistema de diseño
- **Angular Standalone Components**: Arquitectura moderna
- **Angular Signals**: Estado reactivo

## 📱 Características Responsivas

- Diseño mobile-first
- Breakpoints adaptados:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

## 🚀 Próximas Mejoras

- [ ] Integración con backend REST API
- [ ] Sistema de autenticación completo
- [ ] Base de datos para persistencia
- [ ] Sistema de búsqueda avanzada
- [ ] Galería de imágenes de productos
- [ ] Sistema de cotizaciones en línea
- [ ] Panel de analytics

## 📞 Contacto

**Zavalpa Comercializadora**
- Email: contacto@zavalpa.com
- Teléfono: +52 (55) 1234-5678
- Ubicación: Ciudad de México, CDMX

## 📄 Licencia

Este proyecto fue desarrollado para Zavalpa Comercializadora / Valcur.
Todos los derechos reservados © 2025

---

Desarrollado con ❤️ para Zavalpa Comercializadora

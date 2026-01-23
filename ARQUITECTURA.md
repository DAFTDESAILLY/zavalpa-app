# Guía de Arquitectura y Desarrollo

## 🏗️ Arquitectura de la Aplicación

### Patrón de Diseño

La aplicación sigue una arquitectura modular basada en componentes standalone de Angular 17+:

- **Componentes Standalone**: Cada componente es independiente y auto-contenido
- **Servicios con Singleton**: Servicios inyectables globalmente
- **Programación Reactiva**: Uso de RxJS y Observables
- **Signals**: Estado reactivo nativo de Angular

### Flujo de Datos

```
Componente → Servicio → Observable → Componente
```

1. El componente solicita datos al servicio
2. El servicio retorna un Observable
3. El componente se suscribe y recibe los datos
4. La UI se actualiza automáticamente

## 📦 Gestión de Estado

### Servicios de Datos

```typescript
// Ejemplo: services/products.service.ts
@Injectable({ providedIn: 'root' })
export class ProductsService {
  private products: Product[] = [...];
  
  getAllProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
```

### Uso en Componentes

```typescript
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  
  constructor(private productsService: ProductsService) {}
  
  ngOnInit() {
    this.productsService.getAllProducts().subscribe(
      products => this.products = products
    );
  }
}
```

## 🎨 Sistema de Diseño

### Variables CSS

Todas las variables de diseño están definidas en `src/styles.css`:

```css
:root {
  --color-primary: #10b981;
  --color-secondary: #3b82f6;
  --spacing-md: 1.5rem;
  --font-size-lg: 1.125rem;
  /* ... más variables */
}
```

### Clases Utilitarias

```html
<!-- Espaciado -->
<div class="mt-3 mb-4 py-2">...</div>

<!-- Grid -->
<div class="grid grid-cols-3 gap-lg">...</div>

<!-- Botones -->
<button class="btn btn-primary">Acción</button>
```

## 🔌 Integración con Backend (Futuro)

### Preparación para API REST

Los servicios están preparados para migrar a APIs:

**Antes (Mock):**
```typescript
getAllProducts(): Observable<Product[]> {
  return of(this.products);
}
```

**Después (API):**
```typescript
constructor(private http: HttpClient) {}

getAllProducts(): Observable<Product[]> {
  return this.http.get<Product[]>('/api/products');
}
```

### Endpoints Recomendados

```
GET    /api/services           # Listar servicios
POST   /api/services           # Crear servicio
PUT    /api/services/:id       # Actualizar servicio
DELETE /api/services/:id       # Eliminar servicio

GET    /api/products           # Listar productos
POST   /api/products           # Crear producto
PUT    /api/products/:id       # Actualizar producto
DELETE /api/products/:id       # Eliminar producto

GET    /api/company            # Info de la empresa
PUT    /api/company            # Actualizar info

POST   /api/contact            # Enviar mensaje de contacto
POST   /api/auth/login         # Iniciar sesión
POST   /api/auth/logout        # Cerrar sesión
```

## 🔐 Autenticación y Autorización

### Guard de Rutas (Para implementar)

```typescript
// guards/auth.guard.ts
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  
  if (authService.isAuthenticated()) {
    return true;
  }
  
  return inject(Router).createUrlTree(['/login']);
};
```

### Uso en Rutas

```typescript
{
  path: 'admin',
  component: AdminComponent,
  canActivate: [authGuard],
  data: { roles: ['admin'] }
}
```

## 📝 Agregar Nuevos Servicios

### 1. Definir el Modelo

```typescript
// models/index.ts
export interface NewService {
  id: string;
  name: string;
  description: string;
}
```

### 2. Crear el Servicio

```typescript
// services/new-service.service.ts
@Injectable({ providedIn: 'root' })
export class NewServiceService {
  private items: NewService[] = [];
  
  getAll(): Observable<NewService[]> {
    return of(this.items);
  }
}
```

### 3. Crear el Componente

```typescript
// components/new-feature/new-feature.component.ts
@Component({
  selector: 'app-new-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-feature.component.html'
})
export class NewFeatureComponent {}
```

### 4. Agregar la Ruta

```typescript
// app.routes.ts
{
  path: 'nueva-funcionalidad',
  component: NewFeatureComponent
}
```

## 🎯 Mejores Prácticas

### Componentes

- ✅ Usar standalone components
- ✅ Un componente por archivo
- ✅ Nombres descriptivos en kebab-case
- ✅ Mantener componentes pequeños y enfocados
- ✅ Usar OnPush change detection cuando sea posible

### Servicios

- ✅ Singleton con `providedIn: 'root'`
- ✅ Retornar Observables
- ✅ Manejar errores apropiadamente
- ✅ Documentar métodos públicos

### Estilos

- ✅ Usar variables CSS
- ✅ Estilos component-scoped cuando sea posible
- ✅ Mobile-first responsive design
- ✅ Consistencia en espaciado y tipografía

### TypeScript

- ✅ Tipos explícitos
- ✅ Interfaces para estructuras de datos
- ✅ Evitar `any`
- ✅ Usar enums para valores fijos

## 🧪 Testing (Para implementar)

### Estructura de Tests

```typescript
describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsComponent]
    }).compileComponents();
    
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should load products on init', () => {
    component.ngOnInit();
    expect(component.products.length).toBeGreaterThan(0);
  });
});
```

## 📊 Performance

### Lazy Loading

```typescript
{
  path: 'admin',
  loadComponent: () => import('./admin/admin.component')
    .then(m => m.AdminComponent)
}
```

### OnPush Change Detection

```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptimizedComponent {}
```

### TrackBy en *ngFor

```html
@for (item of items; track item.id) {
  <div>{{ item.name }}</div>
}
```

## 🚀 Deployment

### Build de Producción

```bash
ng build --configuration production
```

### Variables de Entorno

```typescript
// environments/environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://api.zavalpa.com'
};
```

### Configuración de Servidor

```nginx
# nginx.conf
server {
  listen 80;
  server_name zavalpa.com;
  
  root /var/www/zavalpa/dist;
  index index.html;
  
  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

## 📚 Recursos Adicionales

- [Angular Documentation](https://angular.io/docs)
- [RxJS Documentation](https://rxjs.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

¿Preguntas? Contacta al equipo de desarrollo.

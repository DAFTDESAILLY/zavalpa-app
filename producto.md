Documento de Requerimientos Técnicos

1. Objetivo

Definir los requerimientos técnicos para implementar páginas de detalle de producto dentro de la aplicación web existente, permitiendo visualizar información del producto y realizar una solicitud de cotización, sin flujo de carrito de compras ni pagos.

—

2. Alcance del desarrollo

Crear páginas individuales de producto (Product Detail Page – PDP).

Reutilizar la estructura actual de categorías y subproductos.

Implementar botón “Cotizar”.

Mantener coherencia visual con el diseño de referencia (detalle de producto tipo reloj).

⚠️ Fuera de alcance:

Carrito de compras

Pasarela de pagos

Gestión de pedidos

—

3. Arquitectura general

3.1 Alcance técnico

Frontend únicamente.

No existe backend, APIs ni base de datos.

La información de productos se maneja desde el código Angular (archivos estáticos o servicios locales).

—

4. Requerimientos técnicos – Frontend

4.1 Estructura de rutas

/productos/👍  
/productos/:categoria/:subcategoria

/producto/:slug

Cada producto debe contar con un slug único.

—

4.2 Página de detalle de producto (PDP)

Componentes requeridos:

ProductDetailComponent

ProductImageGalleryComponent

ProductInfoComponent

QuoteButtonComponent

Contenido mínimo:

Nombre del producto

Imagen principal

Galería opcional de imágenes

Descripción del producto

Características (si existen)

Botón Cotizar

—

4.3 Diseño UI

Basado en el diseño de referencia (producto reloj):

Imagen del producto a la izquierda

Información del producto a la derecha

Diseño limpio, centrado en el producto

Responsive (desktop / tablet / móvil)

—

4.4 Estado y datos

Carga del producto vía ActivatedRoute

Manejo de estados:

Loading

Producto no encontrado

—

5. Requerimientos técnicos – Backend

🚫 No aplica.

Este proyecto no incluye backend ni APIs. Toda la lógica y datos se manejan del lado del frontend.

—

5.2 Cotización

Supuesto: la cotización se realiza vía formulario o redirección.

Opciones técnicas válidas:

Enlace a formulario existente

Modal con formulario

Redirección a WhatsApp / correo

El botón Cotizar debe enviar:

Nombre del producto

Categoría

ID del producto

—

6. Seguridad (Frontend)

Validación de rutas inválidas en Angular Router

Manejo de producto inexistente desde el código

—

7. Rendimiento (Frontend) (Frontend)

Sanitización de parámetros en rutas

Validación de slug inexistente

Protección contra rutas inválidas

—

7\. Rendimiento

Lazy loading de módulos de producto

Optimización de imágenes (lazy loading)

Caché de productos si aplica

—

8. Compatibilidad

Navegadores modernos (Chrome, Edge, Firefox)

Responsive design

Soporte mobile first

—

9. Supuestos

Los productos están definidos en el frontend (arrays, JSON local o services)

No existe persistencia de datos

No se manejan precios

El botón Cotizar solo ejecuta una acción visual o de redirección

—

10. Criterios de aceptación

Cada producto tiene una URL propia

El diseño es consistente con el sitio actual

El botón Cotizar funciona correctamente

No existe flujo de compra ni carrito

—

Fin del documento

Perfecto, ya quedó claro 👍  
Ya ajusté el documento para que sea 100% frontend, sin backend, sin APIs y basado únicamente en el código y estilo que ya manejas.

Cambios clave que ya están reflejados en el documento:

✅ Frontend only (Angular)

❌ Backend / APIs / BD → No aplican

📦 Productos definidos en:

arrays

services

o JSON local

🎨 UI coherente con tu diseño actual (cards, tipografía, colores, layout)

🔘 Botón Cotizar:

acción visual

modal

o redirección (sin lógica de compra)

El documento ahora sirve exactamente para:

Continuar tu código actual
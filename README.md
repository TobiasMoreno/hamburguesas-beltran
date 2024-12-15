# Hamburguesas Beltran

**Sitio Demo de Hamburguesas Beltran**, una empresa especializada en la fabricación de hamburguesas y la venta de promociones que incluyen panes, aderezos y servilletas, ideales para fiestas y eventos.
#### Actualmente se encuentra en desarrollo.


## Tabla de Contenidos

- [Descripción General](#descripción-general)
- [Características](#características)
- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)

## Descripción General

El sitio web incluye una tienda online moderna con promociones exclusivas como *Promo Gourmet*, *Promo Tradicionales*, *Promo Finas*, entre otras. La página está optimizada para mostrar información clara y detallada de los productos, junto con un diseño responsive y accesible.


## Características
- **Tienda Online**: Presenta promociones detalladas, incluyendo imágenes y descripciones claras.
- **Diseño Responsivo**: Adaptado a dispositivos móviles y pantallas de diferentes tamaños.
- **Gestión Dinámica de Contenido**: Los datos de las promociones son obtenidos desde un archivo JSON, lo que facilita su actualización.
- **Secciones Destacadas**: Incluye secciones como *Sobre Nosotros*, *Productos*, *Contacto* y *Ubicación*.

## Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1. **Clona el repositorio:**

   ````bash
   git clone https://github.com/TobiasMoreno/hamburguesas-beltran.git
2. **Navegar al directorio del proyecto:**

   ```bash
   cd tu repo
   ````
3. **Instalar dependencias:**

    Ejecuta el siguiente comando para instalar las dependencias necesarias:
   ```bash
   npm install
   ````
3. **Ejecución:**

    Para ejecutar la aplicación localmente, usa el siguiente comando:
   ```bash
   ng serve
   ````
   Luego abre tu navegador y ve a http://localhost:4200/ para ver la aplicación en acción.

## Estructura del proyecto
````

public
├── assets/
│   ├── img/               # Contiene las imágenes de los proyectos
│   └── data/
│       └── promos.json    # Contiene la lista de proyectos
│
src/
├── app/
│   ├── components/
│   │   ├── store/
│   │   │   ├── store.component.ts
│   │   │   ├── store.component.html
│   │   │   ├── store.component.css
│   │   ├── store/
│   │
│   ├── services
│   │
│   └── app.component.ts
````

## Tecnologías Utilizadas
- **Angular**: Framework principal para la construcción del frontend.
- **Bootstrap 5**: Estilización y diseño responsive.
- **TypeScript**: Lenguaje base para la lógica de la aplicación.
- **HTML y CSS**: Estructura y personalización del diseño.
- **JSON**: Gestión de datos de promociones de forma dinámica.
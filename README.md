Documentación EscritorioDigital.cl con Gatsby

Este documento detalla la configuración, modificación y despliegue del sitio web de EscritorioDigital.cl, construido con Gatsby.

---

## 🚀 Inicio Rápido

Sigue estos pasos para poner en marcha el proyecto de manera local:

1.  **Clonar el repositorio.**

    ```bash
    git clone [https://github.com/jambutch/escritoriodigital.cl.git](https://github.com/jambutch/escritoriodigital.cl.git) # [Reemplazar con la URL real del repositorio si es diferente]
    cd escritoria-digital/
    ```

2.  **Instalar las dependencias.**
    Una vez dentro del directorio del proyecto, instala las dependencias necesarias:

    ```bash
    npm install
    # o si usas Yarn
    # yarn install
    ```

3.  **Iniciar el entorno de desarrollo.**
    Ejecuta el siguiente comando para iniciar el servidor de desarrollo de Gatsby:

    ```bash
    gatsby develop
    ```
    Tu sitio estará ahora accesible en `http://localhost:8000`. También tendrás acceso a GraphiQL para explorar los datos en `http://localhost:8000/___graphql`.

---

## 🛠️ Cómo Modificar el Proyecto

Aquí te detallamos cómo puedes modificar los aspectos clave del sitio:

### 1. Modificar Contenido de Páginas

El contenido de las páginas principales se encuentra en el directorio `src/pages/`.

* **Página de Inicio (`index.js`)**: Modifica el archivo `src/pages/index.js` para cambiar el contenido de la página principal. Puedes editar el texto, añadir o quitar enlaces, o modificar los componentes presentes.
* **Segunda Página (`page-2.js`)**: El contenido de la segunda página se encuentra en `src/pages/page-2.js`.
* **Páginas Especiales**:
    * `using-ssr.js`: Esta página demuestra el renderizado del lado del servidor (SSR) y muestra una imagen aleatoria de perros.
    * `using-typescript.tsx`: Esta página es un ejemplo de cómo Gatsby soporta TypeScript.
    * `using-dsg.js`: Esta es una página DSG (Deferred Static Generation) que se crea bajo demanda.
    * `404.js`: Personaliza esta página en `src/pages/404.js` para el manejo de rutas no encontradas.

### 2. Modificar Componentes Reutilizables

Los componentes de React reutilizables se encuentran en el directorio `src/components/`.

* **Layout General (`layout.js`)**: Este componente define la estructura común de todas las páginas, incluyendo el encabezado y el pie de página.
* **Encabezado (`header.js`)**: Puedes modificar el título del sitio y el logotipo en `src/components/header.js`.
* **SEO (`seo.js`)**: El componente `seo.js` gestiona los metadatos de la página para SEO.

### 3. Modificar Estilos

Los estilos globales se definen en `src/components/layout.css`, y algunos módulos CSS específicos se encuentran junto a los componentes, como `src/components/index.module.css`.

* **Variables CSS**: Las variables CSS principales se definen en `:root` dentro de `layout.css`, permitiendo ajustar colores, espaciados y tipografía de forma centralizada.
* **Estilos Modulares**: Utiliza archivos `.module.css` para estilos específicos de componentes y evitar conflictos.

### 4. Configuración del Sitio

El archivo `gatsby-config.js` es central para la configuración del sitio:

* **Metadatos**: Modifica `siteMetadata` para cambiar el título, la descripción, el autor y la URL del sitio.
* **Plugins**: Aquí se configuran los plugins de Gatsby, como los de procesamiento de imágenes (`gatsby-plugin-image`, `gatsby-transformer-sharp`, `gatsby-plugin-sharp`) y el manifiesto (`gatsby-plugin-manifest`).

---

## 📦 Estructura del Proyecto (Archivos Clave)

Este es un resumen de los archivos y directorios más relevantes:

.
├── node_modules/         # Dependencias del proyecto
├── src/                  # Código fuente del sitio
│   ├── components/       # Componentes de React reutilizables
│   │   ├── header.js
│   │   ├── layout.js
│   │   ├── layout.css
│   │   ├── index.module.css
│   │   └── seo.js
│   ├── images/           # Imágenes del sitio
│   └── pages/            # Páginas de tu sitio (ej. index.js, page-2.js, 404.js)
│       ├── 404.js
│       ├── index.js
│       ├── page-2.js
│       ├── using-ssr.js
│       └── using-typescript.tsx
├── .gitignore            # Archivos ignorados por Git
├── gatsby-browser.js     # APIs de navegador de Gatsby
├── gatsby-config.js      # Configuración principal del sitio
├── gatsby-node.js        # APIs de Node de Gatsby (para el proceso de construcción)
├── gatsby-ssr.js         # APIs de renderizado del lado del servidor de Gatsby
├── LICENSE               # Licencia del proyecto
├── package.json          # Metadatos y dependencias del proyecto
├── package-lock.json     # Registro de dependencias exactas
└── README.md             # Este archivo de documentación


---

## 🚀 Despliegue del Proyecto

Para desplegar el proyecto, primero necesitas construir la versión optimizada:

```bash
gatsby build

Esto generará los archivos estáticos en el directorio public/.

Puedes desplegar este sitio en servicios como Netlify con un solo clic:

Si necesitas desplegar en otro entorno, deberás subir el contenido del directorio public/ al servidor de tu elección.

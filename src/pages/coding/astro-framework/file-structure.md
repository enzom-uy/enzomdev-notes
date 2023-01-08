---
layout: ../../../layouts/PostLayout.astro
title: Estructura de archivos
description: Vista general a la estructura de archivos de un proyecto con Astro.
date: 01/08/2023
---

# Estructura del proyecto

<!--toc:start-->
- [Estructura del proyecto](#estructura-del-proyecto)
  - [Estructura de ejemplo](#estructura-de-ejemplo)
    - [`src`](#src)
    - [`src/components`](#srccomponents)
    - [`src/layouts`](#srclayouts)
    - [`src/pages`](#srcpages)
<!--toc:end-->

- `src/*` - El código fuente del proyecto (components, páginas, estilos, etc).
- `public/*` - Assests no procesados que no son código (fuentes, iconos, etc).
- `package.json` - El package.json del proyecto.
- `astro.config.mjs` - Archivo de configuración de Astro.
- `tsconfig.json` - Archivo de configuración de Typescript.

## Estructura de ejemplo

![Example project tree](https://i.imgur.com/20fWpnN.png)

### `src`

La capeta `src` es donde la mayor parte del código fuente vive. Esto incluye:

- Páginas.
- Layouts.
- Astro components.
- UI framework components.
- Styles.
- Markdown.

Astro procesa, optimiza y empaqueta (bundle) los archivos dentro de `src` para crear
el resultado final que es enviado al navegador.

Algunos archivos (como los Astro components) ni siquiera son enviador al navegador
como escritos, sino que son renderizados a HTML estático. Otros archivos
(como el css) son enviados al navegador pero pueden ser optimizados y empaquetados
con otros archivos del mismo tipo para mejorar el performance.

### `src/components`

`Components` guarda unidades reusables de código HTML para la página.  
Pueden ser Astro components o UI framework components como react o Vue.
Es común agrupar y organizar todos los componentes del proyecto en esta carpeta.

### `src/layouts`

`Layouts` son un tipo especial de componentes que son usados para wrapear
otro contenido en un layout más grande. Estos son más usados por las Astro pages
y Markdown o MDX pages para definir el layout de la página.

### `src/pages`

`Pages`  son un tipo especial de componentes usados para crear nuevas páginas
en el sitio. Una página puede ser un componente de Astro, o un archivo Markdown
que represente alguna página de contenido para el sitio.

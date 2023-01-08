---
title: Routing en Astro
description: Cómo funciona el routing en Astro.
layout: ../../../layouts/PostLayout.astro
date: 01/08/2023
---

# Routing

Usa un sistema basado en archivos y directorios (como Next): cualquier archivo
dentro de la carpeta `src/pages` automáticamente está disponible como ruta.

## Rutas estáticas

Los componentes `.astro` y `.md` automáticamente se convierten en rutas estáticas.

La navegación entre páginas se hace con simples `<a></a>` tags.

## Rutas dinámicas

Se puede especificar en el nombre del archivo `.astro` que sea una ruta dinámica.
Por ejemplo: `posts/[post].astro`. Los `[]` definen que sea dinámica, y dentro de la página
se puede acceder al objeto `post`.

Default, las páginas son generadas en build time, entonces va  a haber un número determinado
de rutas. Si pasamos al modo **SSR** (server-side rendering), se va a generar una ruta en cada request.

### Default SSG

Una ruta dinámica tiene que exportar una función `getStaticPaths()` que retorne un
array de objetos con la propiedad `params`. Cada objeto va a generar la ruta correspondiente.

`[post].astro` define una ruta dinámica "post", entonces los objetos retornados por `getStaticPaths()`
deben contener `post` en los `params`.

```typescript
export function getStatichPaths() {
  return [
    { params: { post: 'post-1' } },
    { params: { post: 'post-2' } },
    { params: { post: 'post-3' } },
  ]
}

const { post } = Astro.params
```

Se pueden incluir múltiples parametros que también van a tener que estar incluidos
en los objetos `params`:

```typescript
export function getStaticpaths() {
  return [
    { params: {lang: 'en', version: 'v1' } },
    { params: {lang: 'es', version: 'v2' } },
  ]
}

const { lang, version } = Astro.params
```

^ Esto generaría `/en-v1/[ruta].astro` y `/es-v2/[ruta.astro]`

### Rest parameters

Se pueden usar el parametro rest (`[...path]`) si se necesita más flexibilidad.

```typescript
// src/pages/sequences/[...path].astro
export function getStaticPaths() {
  return [
    {params: {path: 'one/two/three'}}, // /sequences/one/two/three
    {params: {path: 'four'}}, // /sequences/four
    {params: {path: undefined }} // /sequences/. Definirlo como undefined lo iguala al top level.
  ]
}

const { path } = Astro.params;
```

### Ejemplo de ruta dinámica

```ts
---
export async function getStaticPaths() {
  const pages = [
    {
      slug: undefined,
      title: "Astro Store",
      text: "Welcome to the Astro store!",
    },
    {
      slug: "products",
      title: "Astro products",
      text: "We have lots of products for you",
    },
    {
      slug: "products/astro-handbook",
      title: "The ultimate Astro handbook",
      text: "If you want to learn Astro, you must read this book.",
    },
  ];
  return pages.map(({ slug, title, text }) => {
    return {
      params: { slug },
      props: { title, text },
    };
  });
}

const { title, text } = Astro.props;
---
<html>
  <head>
    <title>{title}</title>
  </head>
  <body>
    <h1>{title}</h1>
    <p>{text}</p>
  </body>
</html>
```

## Con SSR

Las rutas dinámicas se definen igual que con SSG, pero como no son "estáticas" y se generan
en cada request a la ruta, no hace falta usar `getStaticPaths()`.

```ts
// src/pages/resources/[resource]/[id].astro
---
const { resource, id } = Astro.params
---

<h1>{resource}: {id}</h1>
```

### Ejemplo de ruta pero con SSR

```ts
---
const pages = [
  {
    slug: undefined,
    title: 'Astro Store',
    text: 'Welcome to the Astro store!',
  },
  {
    slug: 'products',
    title: 'Astro products',
    text: 'We have lots of products for you',
  },
  {
    slug: 'products/astro-handbook',
    title: 'The ultimate Astro handbook',
    text: 'If you want to learn Astro, you must read this book.',
  }
];

const { slug } = Astro.params;
const page = pages.find((page) => page.slug === slug);
if (!page) return Astro.redirect("/404");
const { title, text } = page;
---
<html>
<head>
  <title>{title}</title>
</head>
<body>
  <h1>{title}</h1>
  <p>{text}</p>
</body>
</html>
```

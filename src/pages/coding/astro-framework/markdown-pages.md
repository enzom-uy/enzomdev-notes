---
layout: ../../../layouts/Layout.astro
title: Páginas de Astro con markdown
description: Cómo crear páginas en nuestras rutas de Astro usando archivos Markdown.
date: "08-01-2023"
---

# Markdown pages

Se pueden usar archivos `.md` y `.mdx` para crear rutas/páginas en astro, siguiendo la misma lógica
que el file-based routing.

A un archivo `.md` se le puede asignar un Astro Layout:

```markdown
---
layout: ../../layouts/BlogPostLayout.astro
title: A title
author: An author
description: A description
---

Post content...
```

En el archivo Layout se puede acceder a una prop llamada `frontmatter`, que contiene
los datos del markdown.

```typescript
// src/layouts/BlogPostLayout.astro
---
const { frontmatter } = Astro.props
---

<html>
  <!-- ... -->
  <h1>{frontmatter.title}</h1>
  <h2>Post author: {frontmatter.author}</h2>
  <p>{frontmatter.description}<p>
  <slot /> <!-- Slot en este caso representa el contenido del Markdown. -->
   <!-- ... -->
</html>
```

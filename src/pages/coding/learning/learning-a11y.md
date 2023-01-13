---
title: Accesibilidad con A11Y
description: Checklist de reglas fundamentales para accesibilidad de la comunidad a11y.
date: 2023-01-13 19:35
layout: ../../../layouts/PostLayout.astro
---

# A11Y

El [proyecto a11y](https://www.a11yproject.com/) es una serie de guías y reglas creadas por la comunidad para cumplir con los requisitos recomendados y necesarios de accesibilidad.

## Checklist

### Contenido

- No usar metáforas complicadas ni figuras literarias ([referencia](https://www.correctores.es/figuras-literarias/)).
- El contenido de un `<a>`, `<button>` o `<label>` tiene que ser único y descriptivo. Algunas personas usan una lista de todos los botones o links que hay en la página para navegar, y botones/links que digan "Click here" o "Read more" no dan el contexto necesario.
- Alinear el texto a la izquierda para idiomas que se lean de izquierda a derecha, y a la derecha para el caso contrario.
- [Validar el HTML](https://validator.w3.org/nu/) para dar una experiencia esperable en todos los navegadores y tecnologías de asistencia.
- Usar el atributo `lang` en el `html` para ayudar a screen readers.
- Títulos distintos en el tag `title` para cada página.
- Que el viewport zoom esté activado. No importa qué tipo de página tengas, siempre se debe respetar los ajustes del sistema operativo del usuario para renderizar el texto.
- Usar los HTML tags adecuados para describir una sección importante (nav, aside, footer, header, main, section).
- El flujo de contenido en la página debe ser lineal.
- Evitar usar el atributo `autofocus`.

### Teclado

Es importante asegurarse de que el usuario pueda navegar por nuestra página solamente usando el teclado.

- Los elementos navegables de la página deben tener un focus style visible.
- El Keyboard Focus tiene que ser coherente con el layout visual de la página.
- Eliminar el contenido navegable invisible.

### Imágenes

- Todas las imágenes deben tener el atributo `alt`.
- En el caso de las imágenes decorativas, se debe incluir el atributi `alt` vacío (`alt=""`).
- En el caso de imágenes complejas como gráficas, estadísticas y mapas, es recomendable proveer de una alternativa en texto.
- En el caso de imágenes que contengan texto se debe agregar ese texto a la descripción de la imágen.

### Headings

- Usar headings para presentar el contenido.
- Solo 1 `h1` por página o vista.
- Los headings deben aparecer en órden lógico descendente.
- No saltearse niveles de heading.

### Listas

- Usar los elementos adecuados para representar listas (ol, ul, dl).

### Controls

Controls son todos los elementos interactivos como links o botones, que le permiten al usuario navegar a su destino o hacer cierta acción.

- Usar `a` para los links.
- Los links deben ser reconocibles como links. El color del texto no es suficiente para indicar la presencia de un link. El underline existe por algo.
- Todos los *controls* deben tener un estado de `:focus`.
- El elemento `button` es para los botones.
- Recomendable agregar *skip links* y que sea visible en focus. Los skip links son útiles para saltearse contenido no necesario (por ejemplo,"Skip to main content").
- Los links que se abren en una nueva pestaña o ventana deben ser distintos a los links *normales*.

### Tablas

- Usar el elemento `table` para describir datos en tablas.
- Usar el elemento `th` para los headers de una tabla.
- Usar el elemento `caption` para darle título a la tabla.

### Formularios

- Todos los elementos `input` deben tener el elemento `label` correspondiente.
- Usar `fieldset` y `legend` donde sea apropiado. `fieldset` se utiliza en los casos donde hay una sección con varios inputs relacionados, y `legend` como `label` de esa sección.
- Usar el atributo `autocomplete` donde sea apropiado.
- Los errores del form al intentar submitearlo tienen que aparecer en una lista arriba del mismo form.
- Asociar el input error al input correspondiente.
- Los errors, success y warnings deben ser visualmente reconocibles no sólo por el color.

### Videos, audio y contenido en vivo

- Desactivar autoplay.
- Los controles deben tener el markup apropiado. Por ejemplo, el botón de mutear debe tener un estado de toggle, y el volumen `type="range"`
- Asegurarse de que todos los videos o audios pueden ser pausados, ya sea clickeando o con la tecla `Space`.

### Apariencia de la página

- Testear la página en modos específicos:
  - La página es legible con el modo de alto contraste?
  - Con colores invertidos?
  - Todavía se ven los íconos, links, imagenes, logos?
  - Se distingue el foreground del background?
- Incrementar el texto a 200% y arreglar lo que se rompa.
- Revisar que haya buena proximidad entre los elementos. Algunos usuarios utilizan cierta cantidad de zoom.
- Verificar que el color no es lo único que destaca los elementos interactuables.
  - Sigo poder diferenciando los links si veo la página/app en grayscale?
- Asegurarse de que las instrucciones (de lo que sea, si las hay) no aparecen solamente visuales o solamente audibles.
- Usar layouts lineales, consistentes y simples.

### Animaciones

- Es mejor que las animaciones sean sutiles y que no flasheen mucho.
- Si la página/app tiene un video como background, permitir pausarlo.
- Asegurarse de que todas las animaciones obedecen la *media query* `prefers-reduced-motion` (remover las animaciones cuando la configuración "reduce motion" esté activada).

### Contraste de colores

- Checkear el contraste en los textos de tamaño normal.
- Checkear el contraste en los textos de tamaño grande.
- Checkear el contraste de los íconos.
- Checkear el contraste de los bordes de los input elements.
- Checkear que no haya texto haciendo overlap con imágenes o videos.
- Checkear colores custom de `::selection`.

### Mobile y Touch

- Checkear que la página/app pueda ser rotada en cualquier dirección.
- Evitar o remover scroll horizontal.
- Asegurarse de que los links y botones pueden ser activados con facilidad por diferentes tamaños de manos y stylus.
- Asegurarse de poner suficiente espacio entre elementos interactuables para tener un márgen de scroll cómodo.

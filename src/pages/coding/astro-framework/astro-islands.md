# Astro Islands

<!--toc:start-->
- [Astro Islands](#astro-islands)
  - [Qué son](#qué-son)
  - [Cómo funcionan las Islas en Astro](#cómo-funcionan-las-islas-en-astro)
  - [Beneficios de las Islas](#beneficios-de-las-islas)
<!--toc:end-->

## Qué son

**Astro Islands** o **Component Islands** son un patrón de arquitectura web creada
por Astro.

El término "**Astro Island**" se refiere a un componente UI interactivo en una
página estática de HTML. Múltiples ***islas*** pueden existir en una página,
y una isla siempre se renderiza en de forma aislada. Podemos pensar en ellas como
islas en un mar de HTML estático no interactivo.

![Islands Architecture: Jason Miller](https://i.imgur.com/GGSVFNV.png)

En Astro se puede usar cualquier UI framework compatible para renderizar islas
en el navegador. Incluso se pueden mezclar frameworks, o simplemente elegir
el favorito. La técnica en la que este patrón se basa es conocida como
**partial** o **selective hydration**. Astro usa esta técnica por detrás.

## Cómo funcionan las Islas en Astro

Astro genera cada página con zero-javascript en el cliente por default.
Cuando usemos un framework de UI, Astro automáticamente va a renderizar el HTML
antes de tiempo y luego quitar todo el Javascript.

```astro
---
import MyReactComponent from '../components/MyReactComponent.jsx'
---
<!-- 100% HTML, nada de Javascript. -->
<MyReactComponent />
```

Pero a veces, Javascript en el cliente es necesario para crear una interfaz
interactiva. En vez de forzar la página completa a convertirse en una SPA,
Astro te permite crear una ***isla***.

```astro
---
import MyReactComponent from '../components/MyReactComponent.jsx'
---
<!-- Este componente es ahora interactivo. El esto de la pgina
     sigue siendo estática y sin Javascript -->
<MyReactComponent client:load />
```

Con las Astro Islands, la gran mayoría del sitio sigue siendo HTML y CSS puro.
En el ejemplo de arriba simplemente agregamos una sola y aislada isla de interactividad,
sin cambiar el resto de la página.

## Beneficios de las Islas

- Performance: la mayor parte de la página es convertido a HTML estático y rápido,
  y el Javascript es cargado solamente en los componentes individuales que lo requieren.

- Parallel loading: en la ilustración previa, la isla de baja prioridad "image carousel"
  no necesita bloquear a la isla de alta prioridad "header". Ambas cargan en paralelo
  y se hidratan aisladas, por lo que el "header" pasa a ser interactivo inmediatamente
  sin tener que esperar por el "carousel" más pesado.

  De hecho, se le puede decir a Astro cómo y cuándo renderizar cada componente.
  Si el "carousel" fuera realmente pesado de cargar, se puede adjuntar una
  [orden especial al cliente](https://docs.astro.build/en/reference/directives-reference/#client-directives)
  que le diga a Astro de sólo cargar el carousel cuando sea visible en la página.
  Si el usuario nunca lo ve, nunca carga.

En Astro, es responsabilidad del desarrollador de decirle explícitamente a Astro
qué componentes en la página necesitan también ejecutarse en el navegador. Astro
sólo va a hidratar exactamente lo que sea necesarioen la página, y dejar el resto
del sitio como HTML estático.

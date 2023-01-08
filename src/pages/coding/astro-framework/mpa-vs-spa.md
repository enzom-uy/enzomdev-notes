---
title: MPA vs SPA
layout: ../../../layouts/PostLayout.astro
description: Qué son y diferencias principales entre MPA y SPA.
date: 01/08/2023
---

# MPA vs SPA

<!--toc:start-->
- [MPA vs SPA](#mpa-vs-spa)
  - [Terminología](#terminología)
  - [Principales diferencias](#principales-diferencias)
    - [Server rendering vs Client rendering](#server-rendering-vs-client-rendering)
    - [Server routing vs Client routing](#server-routing-vs-client-routing)
    - [Server state management vs Client state management](#server-state-management-vs-client-state-management)
<!--toc:end-->

## Terminología

- **MPA**: Multi-Page Application es una página que consiste en multiples
páginas HTML, principalmente renderizadas en el servidor.
Cuando navegás a una nueva página, el navegador pide una nueva página HTML del servidor.

Astro es un **MPA** framework.

- **SPA**: Single-Page Application es una página que consiste en una sola aplicación
de Javascript que carga en el navegador del usuario y posteriormente
renderiza el HTML localmente. En ciertos casos pueden generar HTML en el servidor,
pero son únicas en su habilidad de usar el navegador como una
aplicación de Javascript para renderizar una nueva página HTML cuando navegas.

## Principales diferencias

### Server rendering vs Client rendering

En una MPA, la mayoría del HTML de tu página es renderizado en el servidor.
Esto tiene un impacto dramático en el funcionamiento del sitio, rendimiento y SEO.

Renderizar el HTML en el navegador puede parecer una opción más rápida comparado
a pedirlo a un servidor remoto. Sin embargo, esto no es así. Una SPA va a
funcionar más lenta en la primer carga comparado a un MPA, a menos que se
utilice server-side rendering. Una SPA necesita descargar, parsear y ejecutar
una aplicación entera de Javascript solo para renderizar cualquier HTML de la página.
Luego, seguramente tenga que fetchear data remota, sumando más tiempo de espera.

Las MPA renderizan **todo** el HTML en un servidor remoto, y muchas veces no necesitan
mucho (si es que lo necesitan) Javascrippt para funcionar. Esto les da a las MPA
una primera carga más rápida que las SPA, que es esencial para content-focus.
Sin embargo, esto tiene una desventaja: cualquier navegación futura del usuario
no se va a beneficiar del local rendering, por lo que experiencias largas de usuario
no se van a beneficiar mucho luego de la primer carga.

### Server routing vs Client routing

En una MPA, cada request hecha al servidor decide con qué HTML responder,
por lo que la lógica del routing vive en el servidor. En una SPA, el router
corre localmente en el navegador y "secuestra" cualquier navegación
para renderizar la nueva página sin nunca tocar el servidor.

### Server state management vs Client state management

Las SPA son una arquitectura superior para páginas que tienen que lidiar con
manejos de estado multi-página complejos, ya que se ejecutan como una aplicación
completa de Javascript, lo que les permite mantener el estado y memoria
a través de múltiples páginas.

**Next file:** [Astro Islands](./astro-islands.md)

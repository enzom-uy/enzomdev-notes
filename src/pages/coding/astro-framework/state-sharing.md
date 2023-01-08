---
title: Compartiendo estado
description: Cómo manejar el estado en una página de Astro.
date: 01/08/2023
layout: ../../../layouts/PostLayout.astro
---

# State Sharing

<!--toc:start-->
- [State Sharing](#state-sharing)
  - [Nano Stores](#nano-stores)
  - [FAQ](#faq)
  - [Referencias](#referencias)
<!--toc:end-->

---

## Nano Stores

Astro recomienda una solución diferente a los proveedores de contexto que
normalmente UI frameworks como React o Vue motivan a usar: [**Nano Stores**](https://github.com/nanostores/nanostores).

La librería [**Nano Stores**](https://github.com/nanostores/nanostores) permite
crear ***stores*** que pueden interactuar con cualquier componente. Se recomienda
usar Nano Stores porque:

- **Son ligeras.** Nano Stores se ejecuta con el mínimo necesario de Javascript,
  con 0 dependencias.

- **Framework agnostico.** Esto significa que compartir estado en diferentes
  frameworks es fácil.

## FAQ

- Q: Se puede usar Nano Stores en archivos `.astro` u otros serverside components?
Nano Stores puede ser importado, escrito para y leído desde componentes serverside.
Sin embargo, esto no es recomendado porque:

  - Escribir en un store desde un archivo `.astro` o un componente no hidratado
  no va a afectar el valor recibido por los componentes client-side.
  - No se puede pasar un Nano Store como "prop" a un componente en el cliente.
  - No se puede suscribir para almacenar cambios desde un archivo `.astro`,
  ya que los componentes Astro no se re-renderizan.

## Referencias

- [**Sharing State with Nano Stores**](https://docs.astro.build/en/core-concepts/sharing-state/)
- [**Nano Stores github**](https://github.com/nanostores/nanostores#guide)

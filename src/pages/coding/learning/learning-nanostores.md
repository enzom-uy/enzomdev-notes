---
title: Nanostores
description: Entiendo cómo compartir el estado con Nanostores.
date: 2023-01-09 18:16
layout: ../../../layouts/PostLayout.astro
---

# Nanostores

<!--toc:start-->
- [Nanostores](#nanostores)
  - [Crear un atom store](#crear-un-atom-store)
  - [Obtener el valor de un atom store y actualizarlo](#obtener-el-valor-de-un-atom-store-y-actualizarlo)
  - [Suscribirse al atom store en Vanillajs React y Vue tienen helpers especiales para re-renderizar el componente en cada cambio del store](#suscribirse-al-atom-store-en-vanillajs-react-y-vue-tienen-helpers-especiales-para-re-renderizar-el-componente-en-cada-cambio-del-store)
  - [Guardar objetos y cambiar las keys en un atom store](#guardar-objetos-y-cambiar-las-keys-en-un-atom-store)
  - [Triggerear los listeners sin cambiar el valor en una key](#triggerear-los-listeners-sin-cambiar-el-valor-en-una-key)
  - [Computed Stores](#computed-stores)
  - [Actions](#actions)
  - [Lazy Stores](#lazy-stores)
  - [Tasks](#tasks)
  - [Store Events](#store-events)
  - [Integraciones](#integraciones)
    - [React](#react)
  - [Datos importantes](#datos-importantes)
  - [Buenas prácticas](#buenas-prácticas)
    - [Mover lógica de Componente a Store](#mover-lógica-de-componente-a-store)
    - [Separar cambios y reacción](#separar-cambios-y-reacción)
    - [Reducir el uso de get fuera de tests](#reducir-el-uso-de-get-fuera-de-tests)
  - [Nano Stores Persistent](#nano-stores-persistent)
    - [Instalar](#instalar)
    - [Uso](#uso)
    - [Primitive Store](#primitive-store)
    - [Map Store](#map-store)
    - [Tests](#tests)
<!--toc:end-->

Es un manejador de estado agnóstico al framework.
Usa **atomic stores** y manipulación directa.
Fue diseñado para mover lógica de los componentes a las stores.

- Qué son los ***atoms***?
  - Atom store puede ser usado para guardar strings, numbers y arrays.
  - También se pueden guardar objetos si queremos prohibir los cambios a keys específicas
    y solamente permitir reemplazar el objeto entero.

### Crear un atom store

  ```typescript
  import { atom } from 'nanostores'    

  // typescript: se puede relacionar un atom store a un Type
  export type LoadingStateValue = "empty" | "loading" | "loaded"
  export const counter = atom<LoadingStateValue>("empty")
  ```

### Obtener el valor de un atom store y actualizarlo

  ```typescript
  import { counter } from '@/stores/counter'

  // Obtener el valor
  counter.get()

  // Actualizarlo
  counter.set("loaded")

  // Obtenerlo y actualizarlo (en caso de que fuera un numero por ej)
  counter.set(counter.get() + 1)
  ```

### Suscribirse al atom store en Vanillajs React y Vue tienen helpers especiales para re-renderizar el componente en cada cambio del store

  ```typescript
  const unbindListener = counter.subscribe(value => {
      console.log('counter value:', value)
    })
  ```

### Guardar objetos y cambiar las keys en un atom store

  ```typescript
  import { map } from 'nanostores'
  
  export interface ProfileValue {
      name: string,
      email?: string
  }

  export const profile = map<ProfileValue>({
      name: 'anonymous'
  })

  // Se puede usar store.set(object) o store.setKey(key, value) para actualizar el store.
  profile.setKey('name', 'Kazimir Malevich')
  ```

### Triggerear los listeners sin cambiar el valor en una key

```typescript
store.get().bigList.push(newItem)
store.notify('bigList')
```

### Computed Stores

Estas son Atom Stores basadas en el valor de otro store.

```typescript
import { computed } from 'nanostores'
import { users } from './users'

export const admins = computed(users, all => {
    // Este callback se va a ejecutar cada vez que "users" cambie
    return all.filter(user => user.isAdmin)
  })
```

Se pueden combinar valores de varias stores:

```typescript
import { computed } from 'nanostores'
import { lastVisit } from './lastVisit'
import { posts } from './posts'

export const newPosts = computed([lastVisit, posts], (when, allPosts) => {
    return allPosts.filter(post => post.publishedAt > when)
  })
```

### Actions

Un ***action*** es una función que cambia un store.
Es un buen lugar para mover lógica de negocios como validación u operaciones de red.

Envolver funciones con `action()` puede trackear quién cambió el store en el logger.

```typescript
import { action } from 'nanostores'
import { counter } from '@/stores/counter'

export const increase = action(counter, 'increase', (store, add) -> {
    if (validateMax(store.get() + add)) {
        store.set(store.get() + add)
    }
    return store.get()
})

increase(1) //=> 1
increase(6) //=> 6
```

### Lazy Stores

Cada state tiene dos modos:

- **Mount:** cuando uno o más listeners están conectados a la store.
- **Disabled:** cuando la store no tiene listeners.

Mount/disabled permiten crear lazy stores que sólo van a consumir recursos
si la store está siendo usada en la UI.

`onMount` establece un callback para montar y desactivar states.

```typescript
import { onMount } from 'nanostores'
import { profile } from '@/stores/profile'

onMount(profile, () => {
  // Mount mode
  return () => {
    // Disabled mode
  }
})
```

Una store va a desactivarse con 1 segundo de delay después de la ultima desuscripción.

Usar `keepMount()` para testear los iniciadores de las lazy stores en tests y `cleanStores`
para desmontarlos luego del test.

```typescript
import { cleanStores, keepMount } from 'nanostores'
import { Post } from './profile'

afterEach(() => {
  cleanStores(Post)
})

it('is anonymous from the beginning', () => {
  let post = Post(1)
  keepMount(post)
  // Checks
})

```

### Tasks

`startTask()` y `task()` pueden ser usados para marcar todas las operaciones asíncronas
durante el inicio de una store.

```typescript
import { task } from 'nanostores'
import { post } from '@/stores/post'

onMount(post, () => {
  task(async () => {
    post.set(await loadPost())
  })
})
```

Se puede esperar por todos las tasks pendientes en tests o SSR usando `await allTasks()`.

```typescript
import { allTasks } from 'nanostores' 

post.listen(() => {}) // Poner la store en moco activo para empezar la carga de datos.
await allTasks()

const html = ReactDOMServer.renderToString(<App />)
```

### Store Events

Cada store tiene ciertos eventos:

- `onStart(store, callback)` (no recomendado): cuando se suscribe por primera vez.
- `onStop(store, callback)` (no recomendado): cuando se desuscribe el último.
- `onMount(store, callback)` (**recomendado**): shortcut para usar `onStart` y `onStop`.
  Se recomienda usar `onMount` en vez de los métodos individuales porque tiene un pequeño delay
  para evitar comportamientos errantes.
- `onSet(store, callback)`: antes de aplicar cualquier cambio a la store.
- `onNotify(store, cb)`: antes de notificar a los store listeners acerca de cambios.

`onSet` y `onNotify` pueden usar `abort()` para prevenir cambios o notificaciones.

```typescript
import { onSet } from 'nanostores'

onSet(store, ({ newValue, abort }) => {
  if (!validate(newValue)) {
    abort()
  }
})
```

## Integraciones

### React

Usar el paquete `@nanostores/react` y el hook `useStore()` para recibir el valor del store
y re-renderizar el componente en cada cambio.

```typescript
import { useStore } from '@nanostores/react'
import { profile } from '@/stores/profile.js'
import { Post } from '@/stores/post.js'

export const Header = ({ postId }) => {
  const user = useStore(profile)
  const post = useStore(Post(postId))
  return <header>{post.title} for {user.name}</header>
}
```

## Datos importantes

- `useStore()` provoca un re-renderizado en el componente en el que se usa, así que si buscamos eso
  está bien usarlo, de lo contrario si no queremos un re-render, es mejor usar `store.get()`

## Buenas prácticas

### Mover lógica de Componente a Store

Las stores no están sólo para guardar valores. Se pueden usar para trackear tiempo, para cargar
datos del servidor.

```typescript
import { atom, onMount } from 'nanostores'

export const currentTime = atom<number>(Date.now())

onMount(currentTime, () => {
  currentTime.set(Date.now())
  const updating = setInterval(() => {
    currentTime.set(Date.now())
  }, 1000)
  return () => {
    clearInterval(updating)
  }
})
```

Usar derived stores para crear cadenas de computaciones reactivas.

```typescript
import { computed } from 'nanostores'
import { currentTime } from './currentTime'

const appStarted = Date.now()

export const userInApp = computed(currentTime, now => {
  return now - appStarted
})
```

Con la lógica separada en stores es más fácil escribir y ejecutar tests, como también cambiar de framework.

### Separar cambios y reacción

Usar un listener separado para reaccionar a un nuevo valor en la store,
en vez de una acción donde se cambia el store.

```typescript
const increase = action(counter, 'increase', store => {
  store.set(store.get() + 1)
  // printCounter(store.get())
})

counter.listen(value => {
  printCounter(value)
})
```

Un action no es la única forma de una store para conseguir un nuevo valor.
[Persistent store](https://github.com/nanostores/persistent) pueden conseguir el nuevo valor desde otra pestaña.

### Reducir el uso de get fuera de tests

`get()` retorna el valor actual y es una buena solución para tests.

Pero es mejor usar `useStore()` en la UI para suscribirse a los cambios y siempre re-renderizar.

## Nano Stores Persistent

Guarda datos en el `localStorage` y sincroniza los cambios entre pestañas del navegador.

```typescript
import { persistentAtom } from '@nanostores/persistent'

export const locale = persistentAtom('locale', 'en')
```

### Instalar

`yarn add @nanostores/persistent`

### Uso

### Primitive Store

La store con valor primitivo guarda toda la data en una sola key de `localStorage`.

```typescript
import { persistentAtom } from '@nanostores/persistent'

// 'cart' -> nombre de la key del localStorage.
// [] -> array vacío como valor inicial en caso de que no exista 'cart'.
// encode/decode -> opciones que se pueden configurar para procesar un valor antes o después de obtenerlo del persistent storage.
export const shoppingCart = persistentAtom<Product[]>('cart', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
})

// Se puede cambiar el valor del storage con el método set()
shoppingCart.set([...shoppingCart.get(), newProduct])
```

### Map Store

Guarda cada key del par key:value en una key del `localStorage` separada.

```typescript
import { persistentMap } from '@nanostores/persistent'

export type SettingsValue = {
  sidebar: 'show' | 'hide',
  theme: 'dark' | 'light' | 'auto'
}

export const settings = persistentMap<SettingsValue>('settings:', {
  sidebar: 'show',
  theme: 'auto'
})

// Cambiar el valor de una key con setKey()
settings.setKey('sidebar', 'hide')
```

De esta forma se va a guardar en el `localStorage` como `settings:sidebar` y `settings:theme`.

### Tests

Hay una API especial para reemplazar `localStorage` y falsear un storage engine
con helpers para cambiar keys y obtener todos los valores.

```typescript
import {
  useTestStorageEngine,
  setTestStorageKey,
  cleanTestStorage,
  getTestStorage
} from '@nanostores/persistent'
import { settings } from '@/stores/storage'

beforeAll(() => {
  useTestStorageEngine()
})

afterEach(() => {
  cleanTestStorage()
})

it('listens for changes', () => {
  setTestStorageKey('settings:locale', 'ru')
  expect(settings.get()).toEqual({ locale: 'ru' })
})

it('changes storage', () => {
  settings.setKey('locale')
  expect(getTestStorage()).toEqual({ 'settings:locale': 'ru' })
})

```

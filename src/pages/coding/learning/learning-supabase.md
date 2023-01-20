---
title: Supabase: backend completo para mobile y web apps.
description: Vistazo general a Supabase como solución FOSS a base de datos y backend.
date: 2023-01-20 15:50
layout: ../../../layouts/PostLayout.astro
---

# Supabase: backend completo para mobile y web apps

Supabase fue creado en el 2019 como alternativa principal y FOSS a Firebase.

Por el lado del **backend** Supabase aporta:

- Base de datos.
- Almacenamiento de archivos.
- Edge functions (enviar contenido del servidor CDN más cercano al usuario) en la nube.

Por el lado del **frontend** Supabase aporta:

- Client-side SDKs para conectarse a la infraestructura del **backend.**

Se puede manejar la base de datos como desarrollador en una interfaz sencilla que automáticamente genera
apis REST o GraphQL para usarlas en nuestro código.

La base de datos se integra directamente con la autenticación, además de reaccionar a cambios de datos automáticamente,
aún podiendo escalar en workload.

## Cómo empezar a usarlo

Las opciones principales son creandose una cuenta en la página oficial, comenzando con un free tier,
o desplegando un docker container nosotros mismos.

En la dashboard es donde podemos manejar nuestra base de datos, creando tablas, columnas y filas con data.

Cada proyecto con Supabase viene con un schema de autentitación predeterminado.

La base de dato soporta ***triggers*** para reaccionar a cambios en los datos,
permitiendo ejecutar ***postgres functions*** para aplicar directamente en la db.

Es una interfaz sencilla y linda, pero además genera documentación de la api personalizada automáticamente.
De esta forma podemos copiar las querys a nuestra base de datos y llevarlas a código,
simplemente instalando la SDK correspondiente a nuestro entorno, conectandonos a la base de datos
y finalmente codeando las operaciones.

Suponiendo que implementamos autenticación en un proyecto de Nodejs, podemos escuchar a cambios
en el estado de la autenticación con `onAuthStateChange((event, session))`.  

### SQL

En lo que respecta a SQL, no tenemos que escribir el código literal de SQL, sino que podemos pegar
el output que tuvimos en la interfaz de Supabase.

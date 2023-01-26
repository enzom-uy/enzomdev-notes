---
title: Introducción a Bases de Datos
description: Apuntes sobre la videoconferencia sobre Bases de Datos.
date: 2023-01-26 11:03
layout: ../../../layouts/PostLayout.astro
---

# Curso Introductoroi Virtual: Bases de Datos

<!--toc:start-->
- [Curso Introductoroi Virtual: Bases de Datos](#curso-introductoroi-virtual-bases-de-datos)
  - [Introducción](#introducción)
    - [Bases de datos físicas](#bases-de-datos-físicas)
    - [Bases de datos e aplicaciones](#bases-de-datos-e-aplicaciones)
  - [Ciclo de Vida](#ciclo-de-vida)
    - [Análisis y diseño](#análisis-y-diseño)
    - [Implementación](#implementación)
  - [Por qué almacenamos datos](#por-qué-almacenamos-datos)
  - [Bases de datos NoSQL](#bases-de-datos-nosql)
<!--toc:end-->

## Introducción

Una base de datos es un conjunto de datos pertenecientes a un mismo contexto y almacenados sistemáticamente par
a su posterior uso.

Actualmente,una base de datos es una colección de datos organizada de forma electronica.

### Bases de datos físicas

- Soporte de datos en objetos materiales (cajas, documentos).
- Gestión manual (registro, organización, recuperacion).
- Búsqueda secuencial y/o indexada por etiquetas externas.
- Información analítica procesada manualmente.

### Bases de datos e aplicaciones

- Datos registrados en un soporte electrónico.
- Gestión automatizada.
- Búsqueda indexada por múltiples parametros.
- Información analítica procesada automáticamente.

---

El activo más importante que tienen las empresas son los datos.
Según datos de Statista, de los 7.800 millone de personas en el mundo, 4.660 millones son usuarios activos de internet.
Este número crece cada año y todos estos usuarios de internet están produciendo más de 2,5 trillones de bytes de datos cada día.

## Ciclo de Vida

- Análisis y diseño.
- Implementación.
- Análisis de Datos.
- Nueva estructura de datos - NoSQL.

### Análisis y diseño

- Requerimientos,
  - Declaración de cómo debe comportarse un sistema.
  - Estos requerimientos lo acordamos con el cliente, el que lleva adelante el negocio.
- Análisis.
- Diseño.
  - Extracción de la realidad planteada a través de un modelo.
  - Vamos a seguir ciertos principios cumpliendo con la integridad de los datos, evitando redundancias y tratando
    de acceder a ellos de forma rápida.

### Implementación

Mantenimiento, creación, consultas.

- SGBD.
  - Es la interfaz que va a haber entre los que vamos a llenar la información y el motor donde van a estar guardados los datos.
- CRUD.
  - Creación, lectura de datos, actualización y eliminación de los datos.

Al finalizar la implementación, la base de datos ya está creada y con los datos guardados donde corresponden.

## Por qué almacenamos datos

- Inteligencia de negocio: generar conocimiento para la toma de decisiones.
  - En base a este conocimiento puedo tomar decisiones para mi negocio.

## Bases de datos NoSQL

Pensada para procesar grandes volumenes de datos no estructurados o semiestructurados.

Las bases de datos SQL están pensadas para ambientes web, corporativos, mobile y data mart.
Las bases de datos NoSQL están pensadas para ambientes como Gaming, Social, IoT, Web, Mobile y Enterprise.
